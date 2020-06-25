import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinaireListComponent } from './veterinaire-list/veterinaire-list.component';
import { VeterinaireFormComponent } from './veterinaire-form/veterinaire-form.component';

const routes: Routes = [
  { path: '', component: VeterinaireListComponent },
  { path: 'form', component: VeterinaireFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinaireRoutingModule {}
