import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { VeterinaireRoutingModule } from './veterinaire-routing.module';
import { VeterinaireListComponent } from './veterinaire-list/veterinaire-list.component';

import { VeterinaireService } from './shared/veterinaire.service';
import { VeterinaireFormComponent } from './veterinaire-form/veterinaire-form.component';

@NgModule({
  declarations: [VeterinaireListComponent, VeterinaireFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    VeterinaireRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [VeterinaireService],
})
export class VeterinaireModule {}
