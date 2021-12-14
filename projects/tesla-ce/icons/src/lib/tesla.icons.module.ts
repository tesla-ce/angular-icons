import {ModuleWithProviders, NgModule} from '@angular/core';
import { TeslaIconsComponent } from './tesla.icons.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {TeslaIconsService} from "./tesla.icons.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  id: 'TeslaIconsModule',
  declarations: [TeslaIconsComponent],
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [TeslaIconsComponent]
})

export class TeslaIconsModule {
  static forRoot(config?: any): ModuleWithProviders<TeslaIconsModule> {
    return {
      ngModule: TeslaIconsModule,
      providers: [
        TeslaIconsService,
        config
      ]
    };
  }
}
