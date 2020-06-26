import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AnimalResolverService } from './animal-resolver.service';
import { AnimalService } from './animal.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Animal } from './animal';
import { environment } from 'src/environments/environment';

fdescribe('AnimalResolverService', () => {
  let service: AnimalResolverService;
  let httpTestCtlr: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalService, AnimalResolverService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalResolverService);
    httpTestCtlr = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do a http request', () => {
    const id = 1;
    const route = new ActivatedRouteSnapshot();
    route.params = { id };
    service.resolve(route).subscribe();

    const request = httpTestCtlr.expectOne(
      `${environment.endpoint}/animals/${id}`
    );
    expect(request.request.method).toEqual('GET');

    request.flush({
      id,
      name: '',
      espece: '',
      naissance: 1234567890123,
      picture: '',
      veterinaire: '',
      commentaire: '',
    } as Animal);

    httpTestCtlr.verify();
  });
});
