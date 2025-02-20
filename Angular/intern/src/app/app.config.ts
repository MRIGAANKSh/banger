import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormComponent } from './form/form.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: FormComponent },
      
    ]),
    provideHttpClient(),
  ],
};

// Bootstrap the application
bootstrapApplication(FormComponent, appConfig).catch(err => console.error(err));
