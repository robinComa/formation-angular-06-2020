import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VeterinaireFormComponent } from './veterinaire-form.component';
import { VeterinaireService } from '../shared/veterinaire.service';

describe('VeterinaireFormComponent', () => {
  let component: VeterinaireFormComponent;
  let fixture: ComponentFixture<VeterinaireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinaireFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VeterinaireService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
