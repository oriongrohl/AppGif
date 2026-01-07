import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs-interface';
import { GifsService } from '../../services/gifs';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {
  constructor(private gifService: GifsService ) {}

  get gifs(): Gif[] {
  return this.gifService.listadoGifs;
  }
}
