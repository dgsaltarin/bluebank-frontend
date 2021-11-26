import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBalanceComponent } from './consult-balance.component';

describe('ConsultBalanceComponent', () => {
  let component: ConsultBalanceComponent;
  let fixture: ComponentFixture<ConsultBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
