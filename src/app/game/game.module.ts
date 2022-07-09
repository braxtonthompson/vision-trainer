import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NewGameComponent } from './new-game/new-game.component';



@NgModule({
  declarations: [
    NewGameComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NewGameComponent
  ]
})
export class GameModule { }
