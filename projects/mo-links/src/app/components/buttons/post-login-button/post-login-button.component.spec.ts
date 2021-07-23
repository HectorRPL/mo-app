import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginButtonComponent } from './post-login-button.component';

describe('PostLoginButtonComponent', () => {
  let component: PostLoginButtonComponent;
  let fixture: ComponentFixture<PostLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
