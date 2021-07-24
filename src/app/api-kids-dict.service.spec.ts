import { TestBed } from '@angular/core/testing';

import { ApiKidsDictService } from './api-kids-dict.service';

describe('ApiKidsDictService', () => {
  let service: ApiKidsDictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKidsDictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
