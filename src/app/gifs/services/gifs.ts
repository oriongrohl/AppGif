import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs-interface';


@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public listadoGifs: Gif[] = [];
  //injecto el HttpClient servicio como una dependencia
  private http = inject(HttpClient);


  private _historialEtiquetas: string[] = [];
  private apiKey: string = 'pI7Xd5HYpwIoWuZuLxz0nReGX8zguUWE';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

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

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', 10)
        .set('q', etiqueta);

      this.http.get<SearchResponse>(`${ this.serviceUrl }/search`,{params}).subscribe( resp => {
        this.listadoGifs = resp.data;
        console.log({ gifs: this.listadoGifs });
      })

  }

}
