import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { TeslaIconsModule } from '../../projects/tesla-ce/icons/src/lib/tesla.icons.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

export function appBaseHRef() {
  const baseUrl = 'http://localhost:4200/';
  console.log('Base URL set to: ' + baseUrl);
  return baseUrl;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
  entryComponents: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AppModule {}
