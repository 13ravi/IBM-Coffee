import { TestBed } from '@angular/core/testing';

import { RandomapiService } from './randomapi.service';

describe('RandomapiService', () => {
  let service: RandomapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
