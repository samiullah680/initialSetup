import React from "react";
import "./ToolTip.css";
declare function ToolTip({ children, helpText, position }: ToolTipI): JSX.Element;
export interface ToolTipI {
    children: React.ReactNode;
    helpText?: string | React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}
export default ToolTip;
