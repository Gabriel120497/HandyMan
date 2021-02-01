import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularHorasComponent } from './calcular-horas.component';

describe('CalcularHorasComponent', () => {
  let component: CalcularHorasComponent;
  let fixture: ComponentFixture<CalcularHorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularHorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
