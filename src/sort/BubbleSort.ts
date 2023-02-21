import { Comparator, Sortor } from "./common";

export class BubbleSort<T> extends Sortor<T>  {
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
            for (let bubbleIndex = 0; bubbleIndex < this.input.length - i - 1; bubbleIndex++) {
                if (this.comparator(this.input[bubbleIndex], this.input[bubbleIndex + 1]) === 1) {
                    let temp = this.input[bubbleIndex];
                    this.input[bubbleIndex] = this.input[bubbleIndex + 1]
                    this.input[bubbleIndex + 1] = temp
                }
            }
        }
    }
    getOutput(): T[] {
        return this.input;
    }
}