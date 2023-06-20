import React from "react";
import "./ToolTip.css";
export interface ToolTipI {
    children: React.ReactNode;
    helpText?: string | React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}
declare function ToolTip({ children, helpText, position, }: ToolTipI): JSX.Element;
export default ToolTip;
