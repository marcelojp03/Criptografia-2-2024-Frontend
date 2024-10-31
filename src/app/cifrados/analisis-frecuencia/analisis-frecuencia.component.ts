import { Component } from '@angular/core';
import { AnalisisFrecuenciaService } from '../../services/analisis-frecuencia.service';
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
  selector: 'app-analisis-frecuencia',
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
  templateUrl: './analisis-frecuencia.component.html',
  styleUrl: './analisis-frecuencia.component.scss'
})
export class AnalisisFrecuenciaComponent {
  text: any = '';
  results: any[] = []; // Cambia a un array para almacenar los resultados

  constructor(
    private analisisFrecuenciaService: AnalisisFrecuenciaService
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    console.info(this.text);
    this.analisisFrecuenciaService.processText(this.text)
    .subscribe({
      next: (response: any) => {
        console.info("RESPONSE", response);
        this.results = Object.entries(response.frequencies).map(([key, value]) => ({ key, value }));
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