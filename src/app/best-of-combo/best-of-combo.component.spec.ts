import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfComboComponent } from './best-of-combo.component';

describe('BestOfComboComponent', () => {
  let component: BestOfComboComponent;
  let fixture: ComponentFixture<BestOfComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestOfComboComponent]
    });
    fixture = TestBed.createComponent(BestOfComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
