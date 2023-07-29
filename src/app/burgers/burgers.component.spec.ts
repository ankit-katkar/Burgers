import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersComponent } from './burgers.component';

describe('BurgersComponent', () => {
  let component: BurgersComponent;
  let fixture: ComponentFixture<BurgersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgersComponent]
    });
    fixture = TestBed.createComponent(BurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
