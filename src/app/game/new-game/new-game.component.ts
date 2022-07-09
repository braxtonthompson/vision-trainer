import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

  public onSquareClicked(square: Square) {
    console.log(square);
  }

}
