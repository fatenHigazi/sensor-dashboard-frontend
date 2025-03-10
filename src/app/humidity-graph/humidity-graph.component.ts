import { Component, OnInit } from '@angular/core';
import { SensorService } from '../sensor.service';
import { NgxEchartsModule } from 'ngx-echarts'; // <-- Add this explicitly

@Component({
  selector: 'app-humidity-graph',
  standalone: true, // <-- explicitly standalone
  imports: [NgxEchartsModule], // <-- explicitly import here!
  templateUrl: './humidity-graph.component.html'
})
export class HumidityGraphComponent implements OnInit {

  chartOptions: any = {};

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.loadData();
    setInterval(() => this.loadData(), 2000);
  }

  async loadData() {
    try {
      const sensorData = await this.sensorService.getSensorData();
      this.chartOptions = {
        xAxis: {
          type: 'category',
          data: sensorData.map((_: any, i: number) => `Reading ${i+1}`)
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: 'Humidity',
          data: sensorData.map((d: { humidity: any; }) => d.humidity),
          type: 'line',
          smooth: true
        }]
      };
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
