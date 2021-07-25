import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserPhotoComponent } from './show-user-photo.component';

describe('ShowUserPhotoComponent', () => {
  let component: ShowUserPhotoComponent;
  let fixture: ComponentFixture<ShowUserPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
