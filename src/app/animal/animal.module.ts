import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalService } from './shared/animal.service';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { AnimalListItemComponent } from './animal-list/animal-list-item/animal-list-item.component';
import { HttpTimeInterceptor } from './shared/http-time.interceptor';

@NgModule({
  declarations: [
    AnimalPreviewComponent,
    AnimalListComponent,
    UppercaseDirective,
    TruncatePipe,
    AnimalListItemComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [AnimalPreviewComponent, AnimalListComponent],
  providers: [
    AnimalService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTimeInterceptor, multi: true },
  ],
})
export class AnimalModule {}
