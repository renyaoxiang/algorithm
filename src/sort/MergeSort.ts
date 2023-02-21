import { Comparator, Sortor } from "./common";

export class MergeSort<T> extends Sortor<T>  {
    input: T[];
    comparator: Comparator<T>;
    setInput(input: T[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<T>): void {
        this.comparator = comparator;
    }
    sort(): void {
        if (this.input.length <= 1) {
            return;
        } else {
            const midIndex = Math.floor(this.input.length / 2);
            const left = this.input.slice(0, midIndex);
            const right = this.input.slice(midIndex);
            const leftMergeSort = new MergeSort<T>();
            const rightMergeSort = new MergeSort<T>();
            leftMergeSort.setInput(left);
            rightMergeSort.setInput(right);
            leftMergeSort.setComparator(this.comparator);
            rightMergeSort.setComparator(this.comparator);
            leftMergeSort.sort();
            rightMergeSort.sort();
            const sortedLeft = leftMergeSort.getOutput();
            const sortedRight = rightMergeSort.getOutput();
            const sorted: T[] = [];
            let leftIndex = 0;
            let rightIndex = 0;
            while (leftIndex < sortedLeft.length || rightIndex < sortedRight.length) {
                if (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
                    if (sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
                        sorted.push(sortedLeft[leftIndex++]);
                    } else {
                        sorted.push(sortedRight[rightIndex++]);
                    }
                } else if (leftIndex < sortedLeft.length && rightIndex >= sortedRight.length) {
                    sorted.push(sortedLeft[leftIndex++])
                } else if (leftIndex >= sortedLeft.length && rightIndex < sortedRight.length) {
                    sorted.push(sortedRight[rightIndex++])
                } else {
                    break;
                }
            }
            sorted.forEach((value, index) => {
                this.input[index] = value
            })
        }
    }
    getOutput(): T[] {
        return this.input;
    }
}