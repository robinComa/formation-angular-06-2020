import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AnimalResolverService } from './animal-resolver.service';
import { AnimalService } from './animal.service';

fdescribe('AnimalResolverService', () => {
  let service: AnimalResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalService, AnimalResolverService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
