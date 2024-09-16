import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoBibliotecaPage } from './info-biblioteca.page';

describe('InfoBibliotecaPage', () => {
  let component: InfoBibliotecaPage;
  let fixture: ComponentFixture<InfoBibliotecaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
