import { TestBed } from '@angular/core/testing';
import { SensorService, SensorData } from './sensor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SensorService', () => {
  let service: SensorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SensorService]
    });
    service = TestBed.inject(SensorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch sensor data', () => {
    const mockData: SensorData[] = [{ temperature: 26, humidity: 55, timestamp: '2024-03-09T08:00:02Z' }];

    service.getSensorData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/sensor-data');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
