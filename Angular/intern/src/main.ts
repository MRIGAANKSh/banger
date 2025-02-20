import { bootstrapApplication } from '@angular/platform-browser';
import { FormComponent } from './app/form/form.component';
import { appConfig } from './app/app.config';

bootstrapApplication(FormComponent, appConfig).catch(err => console.error(err));
