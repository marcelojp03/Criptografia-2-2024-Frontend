import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuerzaBrutaComponent } from './fuerza-bruta.component';

describe('FuerzaBrutaComponent', () => {
  let component: FuerzaBrutaComponent;
  let fixture: ComponentFixture<FuerzaBrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuerzaBrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuerzaBrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
