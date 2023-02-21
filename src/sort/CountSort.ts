import { Comparator, Sortor } from "./common";

export class CountSort extends Sortor<number>  {
    input: number[];
    output: number[];
    radixBoxs: number[][];
    quota: number = 10;
    comparator: Comparator<number> = (o1, o2) => o1 - o2 > 0 ? 1 : o1 - o2 == 0 ? 0 : -1;
    setInput(input: number[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<number>): void {
        this.comparator = comparator;
    }
    sort(): void {
        this.input.forEach(it => {
            if (!Number.isInteger(it)) {
                throw new Error("invalid number: " + it)
            }
        })
        const min = Math.min(...this.input)
        const max = Math.max(...this.input)
        const count = [];
        for (let i = min; i <= max; i++) {
            count.push(0);
        }
        this.input.forEach(it => {
            count[it - min] += 1;
        })
        this.output = [];
        count.forEach((it, index) => {
            while (it != 0) {
                this.output.push(index + min);
                it--;
            }
        })
    }
    getOutput(): number[] {
        return this.output;
    }
}