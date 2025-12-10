import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsModule } from './gifs/gifs-module';
import { SharedModule } from './shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GifsModule, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appgif');
}
