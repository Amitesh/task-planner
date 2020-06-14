import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
   if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

 }).catch(err => console.error(err));


// for test case run

// import './test/jasmine-setup';
// import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
// import 'jasmine-core/lib/jasmine-core/boot.js';

// declare var jasmine;

// import './polyfills';

// import 'zone.js/dist/zone-testing';

// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting
// } from '@angular/platform-browser-dynamic/testing';

//  import './app/task-planner/dialogs/input-dialogs/input-dialog.component.spec.ts';
// import './app/app.component.spec.ts';
// import './app/task-planner/sevices/task-list.service.spec.ts';


// bootstrap();

// function bootstrap () {
//   if (window['jasmineRef']) {
//     location.reload();
//     return;
//   } else {
//     window.onload(undefined);
//     window['jasmineRef'] = jasmine.getEnv();
//   }

//   // First, initialize the Angular testing environment.
//   getTestBed().initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
//   );
// }

