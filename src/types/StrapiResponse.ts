export type PaginationMeta = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
};

export type StrapiResponse<T> = {
    data: Array<T>;
    meta: {
        pagination: PaginationMeta;
    };
};

export type StrapiResponseUnique<T> = {
    data: T;
    meta: {
        pagination: PaginationMeta;
    };
};
