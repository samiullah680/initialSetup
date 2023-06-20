import React from "react";
import "./ToolTip.css";
declare function ToolTip({ children, helpText, position, open, popoverContainer, type, extraClass, }: ToolTipI): JSX.Element;
export declare const getScrollParent: (node: any) => any;
export interface ToolTipI {
    children: React.ReactNode;
    helpText?: string | React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    open: boolean;
    popoverContainer?: "body" | "element";
    type?: "light" | "dark";
    extraClass?: string;
}
export default ToolTip;
