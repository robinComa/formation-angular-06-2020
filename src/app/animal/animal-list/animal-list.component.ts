import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.animalService.findAll();
  }

  delete(animal: Animal): void {
    console.log(this.animals);
    const index = this.animals.findIndex((a: Animal) => a.name === animal.name);
    this.animals.splice(index, 1);
  }
}
