import { TestBed } from '@angular/core/testing';

import { TeslaIconsService } from './tesla.icons.service';

describe('IconsService', () => {
  let service: TeslaIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeslaIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
