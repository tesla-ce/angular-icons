import {Inject, Injectable} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Injectable()
export class TeslaIconsService {
  baseURL = '';

  constructor(
    @Inject(APP_BASE_HREF) appBaseHref: any
  ) {
    this.baseURL = appBaseHref;
  }

  getBaseURL() {
    return this.baseURL;
  }
}
