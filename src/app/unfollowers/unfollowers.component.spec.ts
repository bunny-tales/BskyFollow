import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfollowersComponent } from './unfollowers.component';

describe('UnfollowersComponent', () => {
  let component: UnfollowersComponent;
  let fixture: ComponentFixture<UnfollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnfollowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
