import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimalService],
    });
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
