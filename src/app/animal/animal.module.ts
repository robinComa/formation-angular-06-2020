import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AnimalPreviewComponent } from './animal-preview/animal-preview.component';
import { AnimalService } from './shared/animal.service';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { HttpTimeInterceptor } from './shared/http-time.interceptor';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalResolverService } from './shared/animal-resolver.service';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { ConfirmDeleteComponent } from './animal-list/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AnimalPreviewComponent,
    AnimalListComponent,
    UppercaseDirective,
    TruncatePipe,
    AnimalRootComponent,
    AnimalFormComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AnimalRoutingModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
  ],
  exports: [AnimalPreviewComponent, AnimalListComponent],
  providers: [
    AnimalService,
    AnimalResolverService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTimeInterceptor, multi: true },
  ],
  entryComponents: [],
})
export class AnimalModule {}
