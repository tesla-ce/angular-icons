import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaIconsComponent } from './tesla.icons.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('IconsComponent', () => {
  let component: TeslaIconsComponent;
  let fixture: ComponentFixture<TeslaIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaIconsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
