import React from "react";
import "./Popover.css";
declare const Popover: React.FC<PopoverI>;
export declare const getScrollParent: (node: any) => any;
export interface PopoverI {
    open: boolean;
    onClose?: () => void;
    pos?: "left" | "right" | "top" | "bottom";
    posC?: "left" | "right" | "top" | "bottom";
    children: React.ReactNode;
    activator: React.ReactNode;
    popoverContainer?: "body" | "element";
    popoverWidth?: number;
}
export default Popover;
