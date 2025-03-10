import { Component, OnInit } from '@angular/core';
import { SensorService, SensorData } from '../sensor.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-humidity-graph',
  templateUrl: './humidity-graph.component.html'
})
export class HumidityGraphComponent implements OnInit {
  sensorData$!: Observable<string[]>;  

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.sensorData$ = this.sensorService.getSensorData().pipe(
      map(sensorData => sensorData.map((_, i) => `Reading ${i + 1}`)) 
    );
  }
}
