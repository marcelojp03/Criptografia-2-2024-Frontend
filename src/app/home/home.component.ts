import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageModule,CardModule, TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  students = [
    {
      nombre: "Marcelo Jiménez Peña",
      registro: 222008751
    },
    {
      nombre: "Hernan Rene Quelali Linares",
      registro: 219077495
    },
    {
      nombre: "Olga Cristina Siles Canda",
      registro: 219072477
    },
    {
      nombre: "Ricardo Andres Gonzales Franco",
      registro: 219071071
    },
    {
      nombre: "Guery Fernando Alarcón Hurtado",
      registro: 222049006
    },
    {
      nombre: "Clauda Evelin Tapia Molina",
      registro: 219072566
    },
  ];
}
