import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Veterinaire } from './veterinaire';
import { environment } from 'src/environments/environment';

@Injectable()
export class VeterinaireService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Veterinaire[]> {
    return this.httpClient.get<Veterinaire[]>(
      `${environment.endpoint}/veterinaires`
    );
  }

  create(veterinaire: Veterinaire): Observable<void> {
    return this.httpClient.post<void>(
      `${environment.endpoint}/veterinaires`,
      veterinaire
    );
  }
}
