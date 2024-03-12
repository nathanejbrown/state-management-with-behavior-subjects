import { TestBed } from '@angular/core/testing';

import { CatFactsHttpServiceService } from './cat-facts.http-service.service';

describe('CatFactsHttpServiceService', () => {
  let service: CatFactsHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFactsHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
