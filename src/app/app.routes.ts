import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CesarComponent } from './cifrados/cesar/cesar.component';
import { VigenereComponent } from './cifrados/vigenere/vigenere.component';
import { ColumnasComponent } from './cifrados/columnas/columnas.component';
import { FuerzaBrutaComponent } from './cifrados/fuerza-bruta/fuerza-bruta.component';
import { AnalisisFrecuenciaComponent } from './cifrados/analisis-frecuencia/analisis-frecuencia.component';

export const routes: Routes = [
    {
      path: '',
      component: NavbarComponent,
      children: [
        {
            path: '',
            component: HomeComponent,
        },
        {
            path: 'cifrado-cesar',
            component: CesarComponent,
        },
        {
            path: 'cifrado-vigenere',
            component: VigenereComponent,
        },
        {
            path: 'cifrado-columnas',
            component: ColumnasComponent,
        },
        {
          path: 'fuerza-bruta',
          component: FuerzaBrutaComponent,
        },
        {
          path: 'analisis-frecuencia',
          component: AnalisisFrecuenciaComponent,
        },
        // Puedes agregar más rutas aquí para otros componentes
      ],
    },
  ];