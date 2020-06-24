import { Component, OnInit } from '@angular/core';

import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-animal-preview',
  templateUrl: './animal-preview.component.html',
  styleUrls: ['./animal-preview.component.scss'],
})
export class AnimalPreviewComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService
      .get(1)
      .subscribe((animal: Animal) => (this.animal = animal));
  }
}
