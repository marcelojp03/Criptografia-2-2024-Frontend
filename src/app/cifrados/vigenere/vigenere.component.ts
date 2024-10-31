import { Component } from '@angular/core';
import { VigenereService } from '../../services/vigenere.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-vigenere',
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
  templateUrl: './vigenere.component.html',
  styleUrl: './vigenere.component.scss'
})
export class VigenereComponent {
  operationType: any | 'encrypt' | 'decrypt' = 'encrypt';
  text: any = '';
  key: any = '';
  language: any = 'spanish';
  result: any = '';
  languages = [
    { name: 'Español', value: 'spanish' },
    { name: 'Inglés', value: 'english' }
  ];


  constructor(
    private vigenereService: VigenereService
  ) {}

  ngOnInit(): void {

  }

  submitForm(): void {
    console.info(this.operationType)
    console.info(this.text)
    console.info(this.key)
    console.info(this.language.value)
    this.vigenereService.processText(this.operationType, this.text, this.key, this.language.value)
    .subscribe({
      next: (response:any) => {
          console.info("RESPONSE", response)
          this.result = response.result;
      },
      error: (error:Error) => {
          console.error('Error en la solicitud POST:', error);
        }
      });
  }

  clearForm() {
    this.text = '';
    this.key = '';
    this.operationType = null;
    this.result = '';
  }

  // Método para validar el formulario
  isFormValid(): boolean {
    return this.text?.trim() && this.key?.trim() && this.language != null && this.operationType;
  }

}