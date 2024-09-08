import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PesquisaService } from '../services/pesquisa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unfollowers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './unfollowers.component.html',
  styleUrl: './unfollowers.component.scss'
})
export class UnfollowersComponent {
  token: string = '';
  usuario: string = '';
  hasAlert: string = '';
  isLoading: boolean = false;

  subject: any = null;
  followsData: any[] = [];
  followersHandles: Set<string> = new Set();
  missingFollowers: any[] = [];

  constructor(private pesquisaService: PesquisaService) { }

  async loadAllFollows(cursor: string | null = null): Promise<void> {
    let hasMore = true;
    while (hasMore) {
      const response = await this.pesquisaService.getFollows(this.token, this.usuario, cursor).toPromise();
      response.follows.forEach((follow: any) => {
        this.followsData.push({
          handle: follow.handle,
          avatar: follow.avatar || 'default-avatar-url',
        });
      });
      cursor = response.cursor || null;
      hasMore = !!cursor;
    }
  }
  async loadAllFollowers(cursor: string | null = null): Promise<void> {
    let hasMore = true;
    while (hasMore) {
      const response = await this.pesquisaService.getFollowers(this.token, this.usuario, cursor).toPromise();
      response.followers.forEach((follower: any) => {
        this.followersHandles.add(follower.handle);
      });
      cursor = response.cursor || null;
      hasMore = !!cursor;
    }
  }
  async getProfile() {
    try {
      this.subject = await this.pesquisaService.getProfile(this.token, this.usuario).toPromise();
      console.log('Profile carregado:', this.subject);
    } catch (error) {
      console.error('Erro ao carregar o profile:', error);
    }
  }
  async carregarDados() {
    this.isLoading = true;
    try {
      await this.getProfile();
      if (this.subject.followsCount < 501) {
        await this.loadAllFollows();
        await this.loadAllFollowers();
      }else{
        this.hasAlert = 'Somente contas com até 500 seguidores podem acessar essa função.'
      }
      this.missingFollowers = this.followsData.filter(
        follow => !this.followersHandles.has(follow.handle)
      );
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    } finally {
      this.isLoading = false;
    }
  }
  unfollow(handle: string) {
    console.log('Quem sabe vem aí');
  }
}
