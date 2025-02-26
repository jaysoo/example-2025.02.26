export interface PaginationControlPage {
    length: number;
    index: number;
    pageSize: number;
}
export declare const PaginationControl: import("react").ForwardRefExoticComponent<{
    length: number;
    pageSize?: number;
    onPageChange: (page: PaginationControlPage) => any;
    setHasSetPage?: (value: boolean) => void;
} & import("react").RefAttributes<unknown>>;
