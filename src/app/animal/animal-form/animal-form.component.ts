import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AnimalService } from '../shared/animal.service';
import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.animalService.create(this.animal).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
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
