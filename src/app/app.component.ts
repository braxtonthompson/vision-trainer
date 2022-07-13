import { Component } from '@angular/core';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  game: Game;

  constructor() {
    this.game = new Game('squares', 5, 'light');
  }
  
}
