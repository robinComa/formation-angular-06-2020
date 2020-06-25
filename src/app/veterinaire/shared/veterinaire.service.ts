import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Veterinaire } from './veterinaire';

@Injectable()
export class VeterinaireService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Veterinaire[]> {
    return this.httpClient.get<Veterinaire[]>(
      'http://localhost:3000/veterinaires'
    );
  }

  create(veterinaire: Veterinaire): Observable<void> {
    return this.httpClient.post<void>(
      'http://localhost:3000/veterinaires',
      veterinaire
    );
  }
}
