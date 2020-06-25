import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const animal: Animal = null; // null => animal de la vue
    this.animalService.create(animal).subscribe(() => {
      console.log('Ok il est créé');
    });
  }
}
