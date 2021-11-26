import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractComponent } from './subtract.component';

describe('SubtractComponent', () => {
  let component: SubtractComponent;
  let fixture: ComponentFixture<SubtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
