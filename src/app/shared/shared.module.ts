import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessboardComponent } from './chessboard/chessboard.component';



@NgModule({
  declarations: [
    ChessboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChessboardComponent
  ]
})
export class SharedModule { }
