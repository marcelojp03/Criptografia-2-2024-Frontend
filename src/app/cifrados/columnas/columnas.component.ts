import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CesarService } from '../../services/cesar.service';
import { ColumnaService } from '../../services/columna.service';

@Component({
  selector: 'app-columnas',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    InputTextareaModule
  ],
  templateUrl: './columnas.component.html',
  styleUrl: './columnas.component.scss'
})
export class ColumnasComponent {
  operationType: any | 'encrypt' | 'decrypt' = 'encrypt';
  text: any = '';
  key: any = null;
  language: any = 'spanish';
  result: any = '';
  languages = [
    { name: 'Español', value: 'spanish' },
    { name: 'Inglés', value: 'english' }
  ];


  constructor(
    private columnaService: ColumnaService
  ) {}

  ngOnInit(): void {
    // const token = this.cesarService.getToken();
    // if (token) {
    //   console.info("Token encontrado");
    // } else {
    //   console.error("Token no encontrado.");
    //   this.cesarService.fetchCsrfToken().subscribe({
    //     next: (token) => {
    //       console.info('CSRFTOKEN', token);
    //       this.cesarService.setCsrfToken(token);
    //     },
    //     error: (error) => console.error('Error al obtener el token:', error),
    //   });
    // }
  }

  submitForm(): void {
    console.info(this.operationType)
    console.info(this.text)
    console.info(this.key)
    console.info(this.language.value)
    this.columnaService.processText(this.operationType, this.text, this.key, this.language.value)
    .subscribe({
      next: (response:any) => {
          console.info("RESPONSE", response.result)
          this.result = response.result;
      },
      error: (error:Error) => {
          console.error('Error en la solicitud POST:', error);
        }
      });
  }

  clearForm() {
    this.text = '';
    this.key = null;
    this.operationType = null;
    this.result = '';
  }

  // Método para validar el formulario
  isFormValid(): boolean {
    return this.text?.trim() && this.key !== null && this.language != null && this.operationType;
  }

}