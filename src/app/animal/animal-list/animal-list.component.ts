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
    this.animalService
      .findAll()
      .subscribe((animals: Animal[]) => (this.animals = animals));
  }

  delete(animal: Animal): void {
    this.animalService.delete(animal.id).subscribe(() => {
      const index = this.animals.findIndex(
        (a: Animal) => a.name === animal.name
      );
      this.animals.splice(index, 1);
    });
  }
}
