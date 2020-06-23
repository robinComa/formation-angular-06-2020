import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalService } from './shared/animal.service';

@NgModule({
  declarations: [AnimalPreviewComponent],
  imports: [CommonModule],
  exports: [AnimalPreviewComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
