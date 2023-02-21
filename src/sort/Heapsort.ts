import { Comparator, Sortor } from "./common";

export class HeapSort<T> extends Sortor<T>  {
    input: T[];
    comparator: Comparator<T>;
    setInput(input: T[]): void {
        this.input = input;
    }
    setComparator(comparator: Comparator<T>): void {
        this.comparator = comparator;
    }
    sort(): void {
        this.initHeap(0, this.input.length);
        for (let i = this.input.length - 1; i >= 0; i--) {
            this.swap(i, 0)
            this.updateHeap(0, i);
        }
    }
    swap(first: number, second: number) {
        const temp = this.input[first];
        this.input[first] = this.input[second];
        this.input[second] = temp;
    }
    initHeap(index: number, excludeEnd: number) {
        if (index >= excludeEnd) {
            return;
        } else {
            let left = 2 * index + 1
            let right = 2 * index + 2
            if (left < excludeEnd && right < excludeEnd) {
                this.initHeap(left, excludeEnd);
                this.initHeap(right, excludeEnd);
                if (this.comparator(this.input[index], this.input[left]) === 1
                    && this.comparator(this.input[index], this.input[right]) === 1) {
                    return;
                } else if (this.comparator(this.input[left], this.input[right]) >= 0
                    && this.comparator(this.input[left], this.input[index]) === 1) {
                    this.swap(left, index)
                    this.updateHeap(left, excludeEnd)
                } else if (this.comparator(this.input[right], this.input[left]) >= 0
                    && this.comparator(this.input[right], this.input[index]) === 1) {
                    this.swap(right, index)
                    this.updateHeap(right, excludeEnd)
                }
            } else if (left < excludeEnd && right >= excludeEnd) {
                this.initHeap(left, excludeEnd);
                if (this.comparator(this.input[index], this.input[left]) === 1) {
                    return;
                } else if (this.comparator(this.input[left], this.input[index]) === 1) {
                    this.swap(left, index)
                    this.updateHeap(left, index)
                }
            } else if (left >= excludeEnd && right < excludeEnd) {
                this.initHeap(right, excludeEnd);
                if (this.comparator(this.input[index], this.input[right]) === 1) {
                    return;
                } else if (this.comparator(this.input[right], this.input[index]) === 1) {
                    this.swap(right, index)
                    this.updateHeap(right, excludeEnd)
                }
            } else {
                return;
            }
        }
    }

    updateHeap(parentIndex: number, excludeEnd: number) {
        if (parentIndex > excludeEnd) {
            return;
        } else {
            let leftIndex = 2 * parentIndex + 1
            let rightIndex = 2 * parentIndex + 2
            if (leftIndex < excludeEnd && rightIndex < excludeEnd) {
                if (this.comparator(this.input[parentIndex], this.input[leftIndex]) === 1
                    && this.comparator(this.input[parentIndex], this.input[rightIndex]) === 1) {
                    return;
                } else if (this.comparator(this.input[leftIndex], this.input[rightIndex]) >= 0
                    && this.comparator(this.input[leftIndex], this.input[parentIndex]) === 1) {
                    this.swap(leftIndex, parentIndex)
                    this.updateHeap(leftIndex, excludeEnd)
                } else if (this.comparator(this.input[rightIndex], this.input[leftIndex]) >= 0
                    && this.comparator(this.input[rightIndex], this.input[parentIndex]) === 1) {
                    this.swap(rightIndex, parentIndex)
                    this.updateHeap(rightIndex, excludeEnd)
                }
            } else if (leftIndex < excludeEnd && rightIndex >= excludeEnd) {
                if (this.comparator(this.input[parentIndex], this.input[leftIndex]) === 1) {
                    return;
                } else if (this.comparator(this.input[leftIndex], this.input[parentIndex]) === 1) {
                    this.swap(leftIndex, parentIndex)
                    this.updateHeap(leftIndex, excludeEnd)
                }
            } else if (leftIndex >= excludeEnd && rightIndex < excludeEnd) {
                if (this.comparator(this.input[parentIndex], this.input[rightIndex]) === 1) {
                    return;
                } else if (this.comparator(this.input[rightIndex], this.input[parentIndex]) === 1) {
                    this.swap(rightIndex, parentIndex)
                    this.updateHeap(rightIndex, excludeEnd)
                }
            } else {
                return;
            }
        }
    }
    getOutput(): T[] {
        return this.input;
    }
}