import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { SensorService } from '../sensor.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockSensorService: jasmine.SpyObj<SensorService>;

  beforeEach(async () => {
    mockSensorService = jasmine.createSpyObj('SensorService', ['getSensorData']);
    
    await TestBed.configureTestingModule({
      imports: [CommonModule],  // ✅ Fix *ngFor issue
      providers: [{ provide: SensorService, useValue: mockSensorService }],
      declarations: [DashboardComponent] // Add the component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch sensor data on init', () => {
    const mockData = [{ temperature: 25, humidity: 60, timestamp: '2024-03-09T08:00:00Z' }];
    mockSensorService.getSensorData.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(component.sensorData).toEqual(mockData);
  });
});
