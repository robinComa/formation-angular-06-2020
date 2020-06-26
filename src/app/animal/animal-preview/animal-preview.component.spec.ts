import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalPreviewComponent } from './animal-preview.component';
import { TruncatePipe } from '../shared/truncate.pipe';

describe('AnimalPreviewComponent', () => {
  let component: AnimalPreviewComponent;
  let fixture: ComponentFixture<AnimalPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalPreviewComponent, TruncatePipe],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
