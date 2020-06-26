import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(
    private animalService: AnimalService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadAnimals();
  }

  delete(animal: Animal): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((ok: boolean) => {
      if (ok) {
        this.animalService
          .delete(animal.id)
          .subscribe(() => this.loadAnimals());
      }
    });
  }

  private loadAnimals(): void {
    this.animalService
      .findAll()
      .subscribe((animals: Animal[]) => (this.animals = animals));
  }
}
