import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigenereComponent } from './vigenere.component';

describe('VigenereComponent', () => {
  let component: VigenereComponent;
  let fixture: ComponentFixture<VigenereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VigenereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
