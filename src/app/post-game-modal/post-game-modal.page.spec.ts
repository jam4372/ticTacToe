import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGameModalPage } from './post-game-modal.page';

describe('PostGameModalPage', () => {
  let component: PostGameModalPage;
  let fixture: ComponentFixture<PostGameModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGameModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGameModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
