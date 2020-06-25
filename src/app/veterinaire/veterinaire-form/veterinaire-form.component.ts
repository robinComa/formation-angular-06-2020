import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Veterinaire } from '../shared/veterinaire';
import { VeterinaireService } from '../shared/veterinaire.service';

@Component({
  selector: 'app-veterinaire-form',
  templateUrl: './veterinaire-form.component.html',
  styleUrls: ['./veterinaire-form.component.scss'],
})
export class VeterinaireFormComponent implements OnInit {
  veterinaireFormGroup: FormGroup;
  isSubmitted = false;

  constructor(
    private veterinaireService: VeterinaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.veterinaireFormGroup.valid) {
      this.veterinaireService
        .create(this.veterinaireFormGroup.value)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.activatedRoute })
        );
    }
  }

  private initForm(
    veterinaire: Veterinaire = {
      id: null,
      name: '',
    }
  ): void {
    this.veterinaireFormGroup = new FormGroup({
      id: new FormControl(veterinaire.id),
      name: new FormControl(veterinaire.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
}
