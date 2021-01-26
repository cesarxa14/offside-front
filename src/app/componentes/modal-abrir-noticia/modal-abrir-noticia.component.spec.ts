import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAbrirNoticiaComponent } from './modal-abrir-noticia.component';

describe('ModalAbrirNoticiaComponent', () => {
  let component: ModalAbrirNoticiaComponent;
  let fixture: ComponentFixture<ModalAbrirNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAbrirNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAbrirNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
