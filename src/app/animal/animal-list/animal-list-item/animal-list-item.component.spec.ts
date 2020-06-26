import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListItemComponent } from './animal-list-item.component';

describe('AnimalListItemComponent', () => {
  let component: AnimalListItemComponent;
  let fixture: ComponentFixture<AnimalListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListItemComponent);
    component = fixture.componentInstance;
    component.animal = {
      id: 1,
      name: '',
      espece: '',
      naissance: 1234567890123,
      picture: '',
      veterinaire: '',
      commentaire: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
