import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOffreComponent } from './gestion-offre.component';

describe('GestionOffreComponent', () => {
  let component: GestionOffreComponent;
  let fixture: ComponentFixture<GestionOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionOffreComponent]
    });
    fixture = TestBed.createComponent(GestionOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
