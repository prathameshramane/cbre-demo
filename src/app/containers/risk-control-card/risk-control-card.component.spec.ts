import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskControlCardComponent } from './risk-control-card.component';

describe('RiskControlCardComponent', () => {
  let component: RiskControlCardComponent;
  let fixture: ComponentFixture<RiskControlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskControlCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskControlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
