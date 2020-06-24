import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VeterinaireRoutingModule } from './veterinaire-routing.module';
import { VeterinaireListComponent } from './veterinaire-list/veterinaire-list.component';

import { VeterinaireService } from './shared/veterinaire.service';

@NgModule({
  declarations: [VeterinaireListComponent],
  imports: [CommonModule, HttpClientModule, VeterinaireRoutingModule],
  providers: [VeterinaireService],
})
export class VeterinaireModule {}
