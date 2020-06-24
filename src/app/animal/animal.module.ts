import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalService } from './shared/animal.service';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { AnimalListItemComponent } from './animal-list/animal-list-item/animal-list-item.component';

@NgModule({
  declarations: [
    AnimalPreviewComponent,
    AnimalListComponent,
    UppercaseDirective,
    TruncatePipe,
    AnimalListItemComponent,
  ],
  imports: [CommonModule],
  exports: [AnimalPreviewComponent, AnimalListComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
