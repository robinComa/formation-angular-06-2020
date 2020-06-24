import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireListComponent } from './veterinaire-list.component';

describe('VeterinaireListComponent', () => {
  let component: VeterinaireListComponent;
  let fixture: ComponentFixture<VeterinaireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaireListComponent ]
    })
    .compileComponents();
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
