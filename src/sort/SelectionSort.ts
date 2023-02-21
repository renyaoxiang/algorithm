import { Comparator, Sortor } from "./common";

export class SelectionSortor<T> extends Sortor<T>  {
    input: T[];
    comparator: Comparator<T>;
    setInput(input: T[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<T>): void {
        this.comparator = comparator;
    }
    sort(): void {
        for (let i = 0; i < this.input.length; i++) {
            let nextMinIndex = i;
            for (let selectionIndex = i; selectionIndex < this.input.length; selectionIndex++) {
                if (this.comparator(this.input[selectionIndex], this.input[nextMinIndex]) === -1) {
                    nextMinIndex = selectionIndex;
                }
            }
            let temp = this.input[nextMinIndex];
            this.input[nextMinIndex] = this.input[i]
            this.input[i] = temp
        }
    }
    getOutput(): T[] {
        return this.input;
    }
}