import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, timer, tap, interval, takeUntil, takeWhile, take, map, shareReplay, skipWhile, skipUntil, switchMap, startWith, finalize, filter, defer, delayWhen, concat, ignoreElements } from 'rxjs';
import { Game } from 'src/app/models/game';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  @Input() game!: Game;

  countdownLength: number = 3;
  countdownTimer$: Observable<number> = timer(0, 1000).pipe(
    this.startWithTap(() => {this.game.nextPhase(); this.cd.detectChanges()}),
    map((interval) => this.countdownLength - interval),
    takeWhile((timer) => timer >= 0),
    tap((countdownTimer) => {if(countdownTimer === 0) { this.game.nextPhase() }}),
    shareReplay()
  )

  gameTimer$: Observable<number> = timer(0, 1000).pipe(
    map((interval) => this.game.gameLength - interval),
    takeWhile((timer) => timer >= 0),
    tap((timer) => {if(timer === 0) { this.game.nextPhase() }}),
    shareReplay()
  )

  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  public onSquareClicked(square: Square) {
    console.log(square);
  }

  startWithTap<T>(callback: () => void) {
    return (source: Observable<T>) =>
      defer(() => {
        callback();
        return source;
      });
  }

}
