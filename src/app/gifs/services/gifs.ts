import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historialEtiquetas: string[]= [];

  get historialEtiquetas(): string[] {
    return [...this._historialEtiquetas]; // ... sirve para hacer copia (pasar por valor y no por referencias)
  }

  // agregamos la nueva etiqueta
  buscarEtiqueta(etiqueta: string) {
    if (this._historialEtiquetas.length==10){
      this._historialEtiquetas.pop()
    }
    this._historialEtiquetas.unshift(etiqueta) // se mete en el array la etiqueta gracias a unshift

    console.log(this.historialEtiquetas)
  }

}
