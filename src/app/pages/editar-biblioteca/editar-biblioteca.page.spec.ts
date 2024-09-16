import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarBibliotecaPage } from './editar-biblioteca.page';

describe('EditarBibliotecaPage', () => {
  let component: EditarBibliotecaPage;
  let fixture: ComponentFixture<EditarBibliotecaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
