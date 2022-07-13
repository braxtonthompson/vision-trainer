import { ColorType } from "../types/color.type";
import { FILES, FileType } from "../types/file.type";
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
    nextPhase: () => void;
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
        this.squares = this.getSquares(gamePerspective);
    }

    public nextPhase(): void {
        switch(this.gameState) {
            case 'pending':
                this.gameState = 'countdown';
                break;
            case 'countdown':
                this.gameState = 'active';
                break;
            case 'active':
                this.gameState = 'complete';
                break;
            default: 
                return;
        }
    }

    private getSquares(gamePerspective: ColorType): Square[] {
        const squares: Square[] = [];

        const files: FileType[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks: RankType[] = [8, 7, 6, 5, 4, 3, 2, 1];

        switch(gamePerspective) {
            case 'light':
                squares.push(...this.buildSquares(files, ranks));
                break;
            case 'dark':
                squares.push(...this.buildSquares(files.reverse(), ranks.reverse()))
        }

        return squares;
    }

    private buildSquares(files: FileType[], ranks: RankType[]): Square[] {
        const squares: Square[] = [];

        ranks.forEach((rank, rankIndex) => {
            files.forEach((file, fileIndex) => {
                const color: ColorType = (rankIndex + fileIndex + 2) % 2 === 0 ? 'light' : 'dark';
                squares.push(new Square(file, rank, color))
            })
        })

        return squares;
    }
}