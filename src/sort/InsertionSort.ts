import { Comparator, Sortor } from "./common";

export class InsertionSortor<T> extends Sortor<T>  {
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
            for (let insertIndex = i; insertIndex > 0; insertIndex--) {
                if (this.comparator(this.input[insertIndex], this.input[insertIndex - 1]) === -1) {
                    let temp = this.input[insertIndex];
                    this.input[insertIndex] = this.input[insertIndex - 1]
                    this.input[insertIndex - 1] = temp
                    break;
                }
            }
        }
    }
    getOutput(): T[] {
        return this.input;
    }
}