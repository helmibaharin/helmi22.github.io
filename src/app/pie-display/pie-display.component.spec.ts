import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDisplayComponent } from './pie-display.component';

describe('PieDisplayComponent', () => {
  let component: PieDisplayComponent;
  let fixture: ComponentFixture<PieDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
