import { TestBed } from '@angular/core/testing';

import { ExampleobsService } from './exampleobs.service';

describe('ExampleobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleobsService = TestBed.get(ExampleobsService);
    expect(service).toBeTruthy();
  });
});
