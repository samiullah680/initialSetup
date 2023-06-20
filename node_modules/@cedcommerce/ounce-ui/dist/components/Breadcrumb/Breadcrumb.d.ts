import React from "react";
import { FC } from "react";
import "./Breadcrumb.css";
declare const Breadcrumb: FC<BreadcrumbI>;
export interface BreadcrumbI {
    items: ObjI[];
    onClick?: (value: number, obj?: ObjI) => void;
}
export interface ObjI {
    label: string | React.ReactNode;
    value: number;
}
export default Breadcrumb;
