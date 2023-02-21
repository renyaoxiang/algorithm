import { Comparator, Sortor } from "./common";

export class ShellSort<T> extends Sortor<T>  {
    input: T[];
    comparator: Comparator<T>;
    setInput(input: T[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<T>): void {
        this.comparator = comparator;
    }
    sort(): void {
        let gap = 1;
        while (gap < this.input.length) {
            gap = gap * 3 + 1;
        }
        for (; gap > 0; gap = Math.floor(gap / 3)) {
            for (let i = gap; i < this.input.length; i++) {
                let toInsertData = this.input[i];
                let beforeIndex = i - gap;
                while (beforeIndex >= 0 && this.comparator(this.input[beforeIndex], toInsertData) === 1) {
                    this.input[beforeIndex + gap] = this.input[beforeIndex];
                    beforeIndex = beforeIndex - gap;
                }
                this.input[beforeIndex + gap] = toInsertData;
            }
        }
    }
    getOutput(): T[] {
        return this.input;
    }
}