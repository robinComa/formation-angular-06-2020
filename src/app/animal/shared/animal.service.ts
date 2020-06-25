import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from './animal';
import { environment } from 'src/environments/environment';

@Injectable()
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${environment.endpoint}/animals`);
  }

  create(animal: Animal): Observable<void> {
    return this.httpClient.post<void>(
      `${environment.endpoint}/animals`,
      animal
    );
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${environment.endpoint}/animals/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.endpoint}/animals/${id}`
    );
  }
}
