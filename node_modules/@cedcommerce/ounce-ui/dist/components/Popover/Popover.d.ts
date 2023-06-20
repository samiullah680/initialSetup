import React from "react";
import "./Popover.css";
declare const Popover: React.FC<PopoverI>;
export declare const getScrollParent: (node: any) => any;
export interface PopoverI {
    open: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    activator: React.ReactNode;
    popoverContainer?: "body" | "element";
    popoverWidth?: number;
}
export default Popover;
