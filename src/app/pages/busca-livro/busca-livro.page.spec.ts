import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaLivroPage } from './busca-livro.page';

describe('BuscaLivroPage', () => {
  let component: BuscaLivroPage;
  let fixture: ComponentFixture<BuscaLivroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
