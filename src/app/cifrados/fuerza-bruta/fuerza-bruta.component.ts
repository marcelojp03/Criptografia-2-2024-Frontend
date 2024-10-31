import { Component } from '@angular/core';
import { FuerzaBrutaService } from '../../services/fuerza-bruta.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fuerza-bruta',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    InputTextareaModule,
    TableModule
  ],
  templateUrl: './fuerza-bruta.component.html',
  styleUrl: './fuerza-bruta.component.scss'
})
export class FuerzaBrutaComponent {
  text: any = '';
  results: any[] = []; // Cambia a un array para almacenar los resultados

  constructor(
    private fuerzaBrutaService: FuerzaBrutaService
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    console.info(this.text);
    this.fuerzaBrutaService.processText(this.text)
    .subscribe({
      next: (response: any) => {
        console.info("RESPONSE", response);
        this.results = Object.entries(response.results).map(([key, value]) => ({ key, value }));
      },
      error: (error: Error) => {
        console.error('Error en la solicitud POST:', error.message);
      }
    });
  }

  clearForm() {
    this.text = '';
    this.results = []; // Limpiar resultados
  }

  // Método para validar el formulario
  isFormValid(): boolean {
    return this.text?.trim().length > 0;
  }

}