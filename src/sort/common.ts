export interface Comparator<T> {
    (o1: T, o2: T): 1 | 0 | -1
}
export abstract class Sortor<T>   {
    abstract setInput(input: T[]): void;
    abstract setComparator(comparator: Comparator<T>): void;
    abstract sort(): void
    abstract getOutput(): T[]
}