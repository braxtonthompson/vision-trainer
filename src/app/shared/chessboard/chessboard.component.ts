import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent {

  @Input() squares: Square[] = [];

  @Output() onSquareClicked = new EventEmitter<Square>();

  constructor() { }

}
