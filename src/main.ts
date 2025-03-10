import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SensorService } from './app/sensor.service';

bootstrapApplication(AppComponent, {
  providers: [SensorService]  
});
