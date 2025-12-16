import { Component, Input } from '@angular/core';
import { Gif } from '../../../gifs/interfaces/gifs-interface';

@Component({
  selector: 'app-card-list',
  standalone: false,
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',

})
export class CardListComponent {
  @Input()
  public listadoGifs: Gif[] = [];
}
