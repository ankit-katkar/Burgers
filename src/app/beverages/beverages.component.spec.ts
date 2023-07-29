import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesComponent } from './beverages.component';

describe('BeveragesComponent', () => {
  let component: BeveragesComponent;
  let fixture: ComponentFixture<BeveragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeveragesComponent]
    });
    fixture = TestBed.createComponent(BeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
