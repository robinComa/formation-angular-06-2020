import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      naissance: 1234567890123,
      name: 'Felix',
      espece: 'Chat',
      veterinaire: 'Mr Smith',
      commentaire: 'Super sympas ce chat !',
    };
  }

  findAll(): Animal[] {
    return [this.get(), this.get()];
  }
}
