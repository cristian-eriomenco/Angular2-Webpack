import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import '../styles.scss';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
