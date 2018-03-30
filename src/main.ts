import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// let request = new XMLHttpRequest();
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f41bec18f9c4fb89d5f3987aac74166d`
