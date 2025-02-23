import { TestBed } from '@angular/core/testing';

import { ItemlistsService } from './itemlists.service';

describe('ItemlistsService', () => {
  let service: ItemlistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemlistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
