import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';

@NgModule({
  declarations: [AnimalPreviewComponent],
  imports: [CommonModule],
  exports: [AnimalPreviewComponent],
})
export class AnimalModule {}
