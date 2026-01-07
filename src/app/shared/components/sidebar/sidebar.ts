import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs';

@Component({
  selector: 'shared-sidebar', // en vez de app-sidebar
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: false
})

// inyeccion angular del servicio para usarlo en el componente sidebar
export class SidebarComponent {
  constructor(public gifsService: GifsService) {}

  buscarEtiqueta(input: string) {
    const valor = input.trim();
    if (!valor) return;
    this.gifsService.buscarEtiqueta(valor); // llama al servicio
    input = '';
  }

}
