import { Component, OnInit } from '@angular/core';
import { SensorService, SensorData } from '../sensor.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-temperature-graph',
  templateUrl: './temperature-graph.component.html'
})
export class TemperatureGraphComponent implements OnInit {
  sensorData$!: Observable<SensorData[]>;
  temperatureData: number[] = [];

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.sensorData$ = this.sensorService.getSensorData();
    this.sensorData$.pipe(
      map(sensorData => sensorData.map(d => d.temperature))
    ).subscribe(tempData => {
      this.temperatureData = tempData;
      console.log("Processed Temperature Data:", this.temperatureData);
    });
  }
}
