import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardNavigatorComponent } from './dasboard-navigator.component';

describe('DasboardNavigatorComponent', () => {
  let component: DasboardNavigatorComponent;
  let fixture: ComponentFixture<DasboardNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
