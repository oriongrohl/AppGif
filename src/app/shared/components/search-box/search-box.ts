import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
})
export class SearchBoxComponent {

  @ViewChild('txtInputEtiqueta')
  public inputEtiqueta!: ElementRef<HTMLInputElement>;


  constructor (private gifsService: GifsService) { // inyeccion del servicio

  }

  buscarEtiqueta() {
    const nuevaEtiqueta = this.inputEtiqueta.nativeElement.value.toLowerCase(); // acceder al valor html y sacar su valor
    if (!(this.gifsService.historialEtiquetas.includes(nuevaEtiqueta))) {
      console.log("prueba")
      this.gifsService.buscarEtiqueta(nuevaEtiqueta); // se agrega la nueva etiqueta a la lista (metodo de gifs.ts)
      this.inputEtiqueta.nativeElement.value = ""; // se limpia
    }
  }
}
