import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisFrecuenciaComponent } from './analisis-frecuencia.component';

describe('AnalisisFrecuenciaComponent', () => {
  let component: AnalisisFrecuenciaComponent;
  let fixture: ComponentFixture<AnalisisFrecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisFrecuenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisFrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
