import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBurgerComponent } from './premium-burger.component';

describe('PremiumBurgerComponent', () => {
  let component: PremiumBurgerComponent;
  let fixture: ComponentFixture<PremiumBurgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumBurgerComponent]
    });
    fixture = TestBed.createComponent(PremiumBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
