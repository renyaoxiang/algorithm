import { Comparator, Sortor } from "./common";

export class QuickSort<T> extends Sortor<T>  {
    input: T[];
    comparator: Comparator<T>;
    setInput(input: T[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<T>): void {
        this.comparator = comparator;
    }
    sort(): void {
        this.quickSort(0, this.input.length - 1)

    }
    quickSort(start: number, end: number) {
        if (start >= end) {
            return;
        }
        let loopStart = start;
        let loopEnd = end;
        let mid = start;
        let dir = 'backward'
        while (loopStart <= loopEnd) {
            switch (dir) {
                case 'forward':
                    if (this.comparator(this.input[loopStart], this.input[mid]) === 1) {
                        const temp = this.input[mid];
                        this.input[mid] = this.input[loopStart];
                        this.input[loopStart] = temp;
                        dir = 'backward';
                        mid = loopStart;
                        loopEnd--;
                    } else {
                        loopStart++;
                    }
                case 'backward':
                    if (this.comparator(this.input[mid], this.input[loopEnd]) === 1) {
                        const temp = this.input[mid];
                        this.input[mid] = this.input[loopEnd];
                        this.input[loopEnd] = temp;
                        dir = 'forward';
                        mid = loopEnd;
                        loopStart++;
                    } else {
                        loopEnd--;
                    }

            }
        }
        this.quickSort(start, mid - 1)
        this.quickSort(mid + 1, end)
    }
    getOutput(): T[] {
        return this.input;
    }
}