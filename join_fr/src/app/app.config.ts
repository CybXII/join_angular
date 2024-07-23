import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {importProvidersFrom} from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';


export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
  HttpHandlerFn) => {
  const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Token ${localStorage.getItem('token')}`),
  });
  return next(modifiedReq);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([authenticationInterceptor])),
    provideAnimationsAsync(),
    importProvidersFrom(MatNativeDateModule)
  ]
};

