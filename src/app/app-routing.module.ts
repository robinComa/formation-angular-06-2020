import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalPreviewComponent } from './animal/animal-preview/animal-preview.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'animals/:id', component: AnimalPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
