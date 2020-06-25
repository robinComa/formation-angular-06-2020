import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.animalService.create(this.animal).subscribe(() => {
      this.router.navigate(['..']);
    });
  }

  private initForm(
    animal: Animal = {
      id: null,
      name: '',
      commentaire: '',
      espece: '',
      naissance: null,
      picture: '',
      veterinaire: '',
    }
  ): void {
    this.animal = animal;
  }
}
