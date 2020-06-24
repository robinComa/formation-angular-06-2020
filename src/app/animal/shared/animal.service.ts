import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('http://localhost:3000/animals');
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`http://localhost:3000/animals/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/animals/${id}`);
  }
}
