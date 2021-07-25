import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTextInfoComponent } from './show-text-info.component';

describe('ShowTextInfoComponent', () => {
  let component: ShowTextInfoComponent;
  let fixture: ComponentFixture<ShowTextInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTextInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTextInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
