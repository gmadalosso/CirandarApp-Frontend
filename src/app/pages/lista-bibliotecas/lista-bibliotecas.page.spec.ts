import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaBibliotecasPage } from './lista-bibliotecas.page';

describe('ListaBibliotecasPage', () => {
  let component: ListaBibliotecasPage;
  let fixture: ComponentFixture<ListaBibliotecasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBibliotecasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
