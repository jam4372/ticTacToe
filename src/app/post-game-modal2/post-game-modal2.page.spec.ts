import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGameModal2Page } from './post-game-modal2.page';

describe('PostGameModal2Page', () => {
  let component: PostGameModal2Page;
  let fixture: ComponentFixture<PostGameModal2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGameModal2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGameModal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
