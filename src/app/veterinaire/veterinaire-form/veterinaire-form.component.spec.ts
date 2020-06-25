import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireFormComponent } from './veterinaire-form.component';

describe('VeterinaireFormComponent', () => {
  let component: VeterinaireFormComponent;
  let fixture: ComponentFixture<VeterinaireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaireFormComponent ]
    })
    .compileComponents();
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
