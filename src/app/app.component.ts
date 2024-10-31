import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CesarService } from './services/cesar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'criptografia';
  constructor(
    private cesarService: CesarService
  ){}

  ngOnInit(): void {
    // this.cesarService.fetchCsrfToken().subscribe({
    //   next: (token) => {
    //     this.cesarService.setCsrfToken(token);
    //     console.info('CSRFTOKEN', token);
    //   },
    //   error: (error) => console.error('Error al obtener el token:', error),
    // });
    
  }
}
