import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,MenubarModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
     this.items = [
            {
              label: 'Inicio',
              icon: 'pi pi-home',
              command: () => {
                  this.router.navigate(['']);
              }
            },
            {
                label: 'Cifrados',
                icon: 'pi pi-lock',
                items: [
                    {
                        label: 'Cesar',
                        route: '/cifrado-cesar'
                    },
                    {
                        label: 'Vigenere',
                        route: '/cifrado-vigenere'
                    },
                    {
                      label: 'Transposición de columnas',
                      route: '/cifrado-columnas'
                  }
                ]
            },
            {
              label: 'Fuerza Bruta',
              icon: 'pi pi-lock-open',
              command: () => {
                  this.router.navigate(['/fuerza-bruta']);
              }
            },
            {
              label: 'Análisis de Frecuencia',
              icon: 'pi pi-book',
              command: () => {
                  this.router.navigate(['/analisis-frecuencia']);
              }
            },
            // {
            //     label: 'Programmatic',
            //     icon: 'pi pi-link',
            //     command: () => {
            //         this.router.navigate(['/installation']);
            //     }
            // },
            // {
            //     label: 'External',
            //     icon: 'pi pi-home',
            //     items: [
            //         {
            //             label: 'Angular',
            //             url: 'https://angular.io/'
            //         },
            //         {
            //             label: 'Vite.js',
            //             url: 'https://vitejs.dev/'
            //         }
            //     ]
            // }
        ];
    }
  }

