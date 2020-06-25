import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Veterinaire } from '../shared/veterinaire';
import { VeterinaireService } from '../shared/veterinaire.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veterinaire-form',
  templateUrl: './veterinaire-form.component.html',
  styleUrls: ['./veterinaire-form.component.scss'],
})
export class VeterinaireFormComponent implements OnInit {
  veterinaireFormGroup: FormGroup;

  constructor(
    private veterinaireService: VeterinaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.veterinaireService
      .create(this.veterinaireFormGroup.value)
      .subscribe(() =>
        this.router.navigate(['..'], { relativeTo: this.activatedRoute })
      );
  }

  private initForm(
    veterinaire: Veterinaire = {
      id: null,
      name: '',
    }
  ): void {
    this.veterinaireFormGroup = new FormGroup({
      name: new FormControl(veterinaire.name),
    });
  }
}