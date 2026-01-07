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

  buscarEtiqueta(input: HTMLInputElement) {
    const valor = input.value.trim();
    if (!valor) return;
    this.gifsService.buscarEtiqueta(valor); // llama al servicio
    input.value = '';
  }

}
