import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { HumidityGraphComponent } from './humidity-graph.component';

describe('HumidityGraphComponent', () => {
  let component: HumidityGraphComponent;
  let fixture: ComponentFixture<HumidityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumidityGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumidityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
