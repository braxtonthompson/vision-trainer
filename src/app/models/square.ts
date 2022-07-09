import { ColorType } from "../types/color.type";
import { FileType } from "../types/file.type";
import { RankType } from "../types/rank.type";

export interface ISquare {
    rank: RankType;
    file: FileType;
    color: ColorType;
}

export class Square implements ISquare {
    rank: RankType;
    file: FileType;
    color: ColorType;

    constructor(rank: RankType, file: FileType, color: ColorType) {
        this.rank = rank;
        this.file = file;
        this.color = color;
    }
}