import { Pagination } from "./pagination.types";

export class PageableInput {
    constructor(private _page: number, private _size: number) {}

    skip(): number {
        return (this.page - 1) * this.size;
    }

    get size() {
        return this._size;
    }

    get page() {
        return this._page;
    }
    
    static of(page: number, size: number): PageableInput {
        return new PageableInput(page, size);
    }
}
export const paginate: Pagination = (data, total, pageableInput) => {
    return {
        data,
        total,
        page: pageableInput.page,
        size: pageableInput.size,
        totalPages: Math.ceil(total / pageableInput.size),
        hasNext: (pageableInput.page) * pageableInput.size < total,
        hasPrevious: pageableInput.page > 1
    }
}