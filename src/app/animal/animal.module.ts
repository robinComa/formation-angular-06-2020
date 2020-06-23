import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalService } from './shared/animal.service';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [AnimalPreviewComponent, AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalPreviewComponent, AnimalListComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
