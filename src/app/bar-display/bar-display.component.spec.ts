import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDisplayComponent } from './bar-display.component';

describe('BarDisplayComponent', () => {
  let component: BarDisplayComponent;
  let fixture: ComponentFixture<BarDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
