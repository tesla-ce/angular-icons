import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TeslaIconsModule} from "../../projects/tesla-ce/icons/src/lib/tesla.icons.module";
import {APP_BASE_HREF} from "@angular/common";

export function appBaseHRef() {
  const baseUrl = 'http://localhost:4200/';
  console.log('Base URL set to: ' + baseUrl);
  return baseUrl;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeslaIconsModule.forRoot({
      provide: APP_BASE_HREF,
      useFactory: appBaseHRef,
      deps: []
    })
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: appBaseHRef,
      deps: []
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
