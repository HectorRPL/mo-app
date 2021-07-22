import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToLoginButtonComponent } from './navigate-to-login-button.component';

describe('NavigateToLoginButtonComponent', () => {
  let component: NavigateToLoginButtonComponent;
  let fixture: ComponentFixture<NavigateToLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateToLoginButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateToLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
