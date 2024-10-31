import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CesarService } from '../../services/cesar.service';

@Component({
  selector: 'app-cesar',
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
  templateUrl: './cesar.component.html',
  styleUrls: ['./cesar.component.scss']
})
export class CesarComponent {
  operationType: any | 'encrypt' | 'decrypt' = 'encrypt';
  text: any = '';
  shift: any = null;
  language: any = 'spanish';
  result: any = '';
  languages = [
    { name: 'Español', value: 'spanish' },
    { name: 'Inglés', value: 'english' }
  ];


  constructor(
    private cesarService: CesarService
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
    console.info(this.shift)
    console.info(this.language.value)
    this.cesarService.processText(this.operationType, this.text, this.shift, this.language.value)
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
    this.shift = null;
    this.operationType = null;
    this.result = '';
  }

  // Método para validar el formulario
  isFormValid(): boolean {
    return this.text?.trim() && this.shift !== null && this.language != null && this.operationType;
  }

}

