import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PesquisaService {

    private apiUrlFollows = 'https://public.api.bsky.app/xrpc/app.bsky.graph.getFollows'; 
    private apiUrlFollowers = 'https://public.api.bsky.app/xrpc/app.bsky.graph.getFollowers';
    private apiProfile = 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile';

    constructor(private http: HttpClient) { }
    getFollows(token: string, actor: string, cursor: string | null = null): Observable<any> {
        let params = new HttpParams()
        .set('actor', actor)
        .set('limit', 100);
        if (cursor) {
            params = params.set('cursor', cursor);
        }
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        });
        return this.http.get<any>(`${this.apiUrlFollows}`, { headers, params });
    }
    getFollowers(token: string, actor: string, cursor: string | null = null): Observable<any> {
        let params = new HttpParams()
        .set('actor', actor)
        .set('limit', 100);
        if (cursor) {
            params = params.set('cursor', cursor);
        }
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        });
        return this.http.get<any>(`${this.apiUrlFollowers}`, { headers, params });
    }
    getProfile(token: string, actor: string): Observable<any> {
        let params = new HttpParams()
        .set('actor', actor)
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        });
        return this.http.get<any>(`${this.apiProfile}`, { headers, params });
    }
}