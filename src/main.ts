import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as smoothscroll from 'smoothscroll-polyfill';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

smoothscroll.polyfill();
