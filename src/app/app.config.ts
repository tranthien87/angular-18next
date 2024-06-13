import { ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideImgixLoader} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,  withPreloading(PreloadAllModules),),
    provideAnimations(),
  ]
};
