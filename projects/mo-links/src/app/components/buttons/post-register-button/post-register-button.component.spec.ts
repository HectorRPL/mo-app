import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegisterButtonComponent } from './post-register-button.component';

describe('PostRegisterButtonComponent', () => {
  let component: PostRegisterButtonComponent;
  let fixture: ComponentFixture<PostRegisterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRegisterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRegisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
