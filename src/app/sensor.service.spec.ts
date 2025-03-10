import { TestBed } from '@angular/core/testing';
import { SensorService } from './sensor.service';
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
    service.getSensorData().subscribe();

    const req = httpMock.expectOne('http://localhost:8080/api/sensor');
    expect(req.request.method).equal('GET');  

    req.flush([]);  // Simulate API response
  });

  afterEach(() => {
    httpMock.verify();
  });
});
