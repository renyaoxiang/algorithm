import { Comparator, Sortor } from "./common";

export class RadixBoxSort extends Sortor<number>  {
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

        throw new Error("TODO");
    }
    getOutput(): number[] {
        return this.output;
    }
}