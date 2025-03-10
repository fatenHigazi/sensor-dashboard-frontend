import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorService, SensorData } from '../sensor.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],  
  providers: [SensorService],  
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  sensorData: SensorData[] = [];

  constructor(private sensorService: SensorService) {}  

  ngOnInit(): void {
    this.sensorService.getSensorData().subscribe({
      next: (data: SensorData[]) => {
        console.log("Fetched sensor data:", data);
        this.sensorData = data;
      },
      error: err => console.error("Failed to fetch data:", err)
    });
  }
}
