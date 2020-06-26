import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VeterinaireService } from './veterinaire.service';

describe('VeterinaireService', () => {
  let service: VeterinaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VeterinaireService],
    });
    service = TestBed.inject(VeterinaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
