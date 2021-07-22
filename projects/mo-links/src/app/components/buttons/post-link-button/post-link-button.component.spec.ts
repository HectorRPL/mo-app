import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLinkButtonComponent } from './post-link-button.component';

describe('PostLinkButtonComponent', () => {
  let component: PostLinkButtonComponent;
  let fixture: ComponentFixture<PostLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLinkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
