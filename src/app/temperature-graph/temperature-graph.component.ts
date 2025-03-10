import { Component, OnInit } from '@angular/core';
import { SensorService, SensorData } from '../sensor.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-temperature-graph',
  templateUrl: './temperature-graph.component.html'
})
export class TemperatureGraphComponent implements OnInit {
  temperatureData$!: Observable<number[]>;  // ✅ Store transformed data

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.temperatureData$ = this.sensorService.getSensorData().pipe(
      map(sensorData => sensorData.map(d => d.temperature)) // ✅ Transform before using in template
    );
  }
}
