import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListViewComponent } from './link-list-view.component';

describe('LinkListViewComponent', () => {
  let component: LinkListViewComponent;
  let fixture: ComponentFixture<LinkListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
