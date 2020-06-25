import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animal-preview',
  templateUrl: './animal-preview.component.html',
  styleUrls: ['./animal-preview.component.scss'],
})
export class AnimalPreviewComponent implements OnInit {
  animal: Animal;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.animal = this.activatedRoute.snapshot.data.animal;
  }
}
