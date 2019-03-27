import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreGamePage } from './pre-game.page';

describe('PreGamePage', () => {
  let component: PreGamePage;
  let fixture: ComponentFixture<PreGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
