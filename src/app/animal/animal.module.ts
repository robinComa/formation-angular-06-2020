import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalService } from './shared/animal.service';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { AnimalListItemComponent } from './animal-list/animal-list-item/animal-list-item.component';
import { HttpTimeInterceptor } from './shared/http-time.interceptor';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalResolverService } from './shared/animal-resolver.service';

@NgModule({
  declarations: [
    AnimalPreviewComponent,
    AnimalListComponent,
    UppercaseDirective,
    TruncatePipe,
    AnimalListItemComponent,
    AnimalRootComponent,
  ],
  imports: [CommonModule, HttpClientModule, AnimalRoutingModule],
  exports: [AnimalPreviewComponent, AnimalListComponent],
  providers: [
    AnimalService,
    AnimalResolverService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTimeInterceptor, multi: true },
  ],
})
export class AnimalModule {}
