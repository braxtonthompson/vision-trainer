import { ColorType } from "../types/color.type";
import { FileType } from "../types/file.type";
import { RankType } from "../types/rank.type";

export interface ISquare {
    file: FileType;
    rank: RankType;
    color: ColorType;
}

export class Square implements ISquare {
    file: FileType;
    rank: RankType;
    color: ColorType;

    constructor(file: FileType, rank: RankType, color: ColorType) {
        this.file = file;
        this.rank = rank;
        this.color = color;
    }
}