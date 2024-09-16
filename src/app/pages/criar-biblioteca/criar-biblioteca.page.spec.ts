import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarBibliotecaPage } from './criar-biblioteca.page';

describe('CriarBibliotecaPage', () => {
  let component: CriarBibliotecaPage;
  let fixture: ComponentFixture<CriarBibliotecaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarBibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
