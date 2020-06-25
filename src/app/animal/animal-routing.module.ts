import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalResolverService } from './shared/animal-resolver.service';
import { AnimalFormComponent } from './animal-form/animal-form.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalRootComponent,
    children: [
      { path: '', component: AnimalListComponent },
      { path: 'form', component: AnimalFormComponent },
      {
        path: ':id',
        component: AnimalPreviewComponent,
        resolve: {
          animal: AnimalResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
