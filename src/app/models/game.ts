import { ColorType } from "../types/color.type";
import { FILES } from "../types/file.type";
import { GameMode } from "../types/game-mode.type";
import { GameState } from "../types/game-state.type";
import { RANKS, RankType } from "../types/rank.type";
import { ISelection } from "./selection";
import { ISquare, Square } from "./square";

export interface IGame {
    gameMode: GameMode;
    gameState: GameState;
    gameLength: number;
    gamePerspective: ColorType;
    squares: ISquare[];
    selections: ISelection[];
}

export class Game implements IGame {
    gameMode: GameMode;
    gameState: GameState = 'pending';
    gameLength: number;
    gamePerspective: ColorType;
    squares: ISquare[];
    selections: ISelection[] = [];

    constructor(gameMode: GameMode, gameLength: number, gamePerspective: ColorType) {
        this.gameMode = gameMode;
        this.gameLength = gameLength;
        this.gamePerspective = gamePerspective;
        this.squares = this.buildSquares(gamePerspective);
    }

    private buildSquares(gamePerspective: ColorType): Square[] {
        const squares: Square[] = [];

        for (const rank in RANKS) {
            for (const file in FILES) {
                squares.push(new Square(RANKS[rank], FILES[file], 'dark'))
            }
        }

        return squares;
    }
}