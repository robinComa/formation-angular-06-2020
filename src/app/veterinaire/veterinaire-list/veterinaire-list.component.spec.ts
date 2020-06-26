import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VeterinaireListComponent } from './veterinaire-list.component';
import { VeterinaireService } from '../shared/veterinaire.service';

describe('VeterinaireListComponent', () => {
  let component: VeterinaireListComponent;
  let fixture: ComponentFixture<VeterinaireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinaireListComponent],
      imports: [HttpClientTestingModule],
      providers: [VeterinaireService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
