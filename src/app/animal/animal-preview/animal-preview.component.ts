import { Component, OnInit, OnDestroy } from '@angular/core';

import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-preview',
  templateUrl: './animal-preview.component.html',
  styleUrls: ['./animal-preview.component.scss'],
})
export class AnimalPreviewComponent implements OnInit, OnDestroy {
  animal: Animal;

  private routeSubscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.animalService
          .get(+params.id)
          .subscribe((animal: Animal) => (this.animal = animal));
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
