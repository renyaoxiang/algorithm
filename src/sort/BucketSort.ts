import { Comparator, Sortor } from "./common";
import { InsertionSortor } from "./InsertionSort";

export class BucketSort extends Sortor<number>  {
    input: number[];
    output: number[];
    buckets: number[][];
    quota: number = 10;
    comparator: Comparator<number> = (o1, o2) => o1 - o2 > 0 ? 1 : o1 - o2 == 0 ? 0 : -1;
    setInput(input: number[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<number>): void {
        this.comparator = comparator;
    }
    sort(): void {
        const min = Math.min(...this.input)
        const max = Math.max(...this.input)
        const bucketsLength = Math.floor((max - min) / this.quota) + 1;
        this.buckets = [];
        for (let i = 0; i < bucketsLength; i++) {
            this.buckets.push([])
        }
        this.input.forEach(it => {
            const bucketIndex = Math.floor((it - min) / this.quota);
            this.buckets[bucketIndex].push(it)
        })
        for (let i = 0; i < bucketsLength; i++) {
            const insertionSortor = new InsertionSortor<number>();
            insertionSortor.setComparator(this.comparator)
            insertionSortor.setInput(this.buckets[i])
            this.buckets[i] = insertionSortor.getOutput();
        }
        this.output = this.buckets.reduce((previous, current) => {
            return [...previous, ...current]
        }, []);
    }
    getOutput(): number[] {
        return this.input;
    }
}