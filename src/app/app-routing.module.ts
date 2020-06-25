import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  {
    path: 'veterinaires',
    loadChildren: () =>
      import('./veterinaire/veterinaire.module').then(
        (m) => m.VeterinaireModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
