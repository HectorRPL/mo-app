import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLinkIconButtonComponent } from './delete-link-icon-button.component';

describe('DeleteLinkIconButtonComponent', () => {
  let component: DeleteLinkIconButtonComponent;
  let fixture: ComponentFixture<DeleteLinkIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLinkIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLinkIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
