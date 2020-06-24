import { Component, OnInit } from '@angular/core';
import { VeterinaireService } from '../shared/veterinaire.service';
import { Veterinaire } from '../shared/veterinaire';

@Component({
  selector: 'app-veterinaire-list',
  templateUrl: './veterinaire-list.component.html',
  styleUrls: ['./veterinaire-list.component.scss'],
})
export class VeterinaireListComponent implements OnInit {
  veterinaires: Veterinaire[];

  constructor(private veterinaireService: VeterinaireService) {}

  ngOnInit(): void {
    this.veterinaireService
      .findAll()
      .subscribe(
        (veterinaires: Veterinaire[]) => (this.veterinaires = veterinaires)
      );
  }
}
