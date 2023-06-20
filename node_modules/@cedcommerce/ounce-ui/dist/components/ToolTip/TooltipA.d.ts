import React from "react";
import "./ToolTip.css";
declare function ToolTipA({ children, helpText, position, open, popoverContainer, type, }: ToolTipI): JSX.Element;
export declare const getScrollParent: (node: any) => any;
export interface ToolTipI {
    children: React.ReactNode;
    helpText?: string | React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    open: boolean;
    popoverContainer?: "body" | "element";
    type?: "light" | "dark";
}
export default ToolTipA;
