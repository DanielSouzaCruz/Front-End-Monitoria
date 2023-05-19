import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrobasicoPage } from './cadastrobasico.page';

describe('CadastrobasicoPage', () => {
  let component: CadastrobasicoPage;
  let fixture: ComponentFixture<CadastrobasicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrobasicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
