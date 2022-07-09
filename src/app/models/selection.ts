export interface ISelection {
    userSelection: string;
    correctSelection: string;
    correct: boolean;
}

export class Selection implements ISelection {
    userSelection: string;
    correctSelection: string;

    get correct(): boolean {
        return this.userSelection === this.correctSelection;
    }

    constructor(userSelection: string, correctSelection: string) {
        this.userSelection = userSelection;
        this.correctSelection = correctSelection;
    }
}