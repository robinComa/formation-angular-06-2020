import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinaireListComponent } from './veterinaire-list/veterinaire-list.component';

const routes: Routes = [{ path: '', component: VeterinaireListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinaireRoutingModule {}
