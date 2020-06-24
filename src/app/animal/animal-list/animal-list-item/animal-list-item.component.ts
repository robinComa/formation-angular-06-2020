import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../shared/animal';

@Component({
  selector: `app-animal-list-item`,
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.scss'],
})
export class AnimalListItemComponent implements OnInit {
  @Input() animal: Animal;
  @Output() remove: EventEmitter<Animal> = new EventEmitter<Animal>();

  constructor() {}

  ngOnInit(): void {}

  delete(): void {
    this.remove.emit(this.animal);
  }
}
