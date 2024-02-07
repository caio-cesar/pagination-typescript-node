export type Page<T> = {
    data: T[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

export type Pagination = {
    <T>(data: T[], total: number, pageableInput: PageableInput): Page<T>;
}