import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor() {
    console.log('new');
  }

  get(): Animal {
    return {
      name: 'Felix',
      espece: 'Chat',
      veterinaire: 'Mr Smith',
      commentaire: 'Super sympas ce chat !',
    };
  }
}
