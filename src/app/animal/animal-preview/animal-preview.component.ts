import { Component, OnInit } from '@angular/core';

import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animal-preview',
  templateUrl: './animal-preview.component.html',
  styleUrls: ['./animal-preview.component.scss'],
})
export class AnimalPreviewComponent implements OnInit {
  animal: Animal;

  constructor() {}

  ngOnInit(): void {
    this.animal = {
      name: 'Felix',
      espece: 'Chat',
      veterinaire: 'Mr Smith',
      commentaire: 'Super sympas ce chat !',
    };
  }
}
