interface Page {
    current: number;
    total: number;
    isFirst: boolean;
    isLast: boolean;
    next(): void;
    prev(): void;
    jump(page: number): void;
    init(total: number): void;
}
declare type UsePage = (initialPage?: number) => Page;
export declare const usePage: UsePage;
export {};
