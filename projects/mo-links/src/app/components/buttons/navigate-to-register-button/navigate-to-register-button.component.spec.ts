import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToRegisterButtonComponent } from './navigate-to-register-button.component';

describe('NavigateToRegisterButtonComponent', () => {
  let component: NavigateToRegisterButtonComponent;
  let fixture: ComponentFixture<NavigateToRegisterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateToRegisterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateToRegisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
