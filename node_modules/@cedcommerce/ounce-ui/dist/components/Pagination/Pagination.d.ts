import React from "react";
import "./Pagination.css";
declare const Pagination: React.FC<PaginationI>;
export interface PaginationI {
    currentPage?: number | string | any;
    totalitem?: number | any;
    totalPages?: number;
    countPerPage?: string | any;
    optionPerPage?: Array<ObjI>;
    simpleView?: boolean;
    onNext?: () => void;
    onPrevious?: () => void;
    onEnter?: (page: number | string) => void;
    onCountChange?: (count: number) => void;
}
interface ObjI {
    label: string;
    value: string;
}
export default Pagination;
