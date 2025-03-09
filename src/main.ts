// main.ts (correct and recommended way)
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(NgxEchartsModule.forRoot({ echarts: () => import('echarts') })),
    // Add other global providers here
  ]
}).catch(err => console.error(err));
