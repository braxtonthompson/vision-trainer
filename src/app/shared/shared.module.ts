import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { SquareComponent } from './square/square.component';



@NgModule({
  declarations: [
    ChessboardComponent,
    SquareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChessboardComponent,
    SquareComponent
  ]
})
export class SharedModule { }
