import React, { FC } from "react";
import "./LRLayout.css";
declare const LRLayout: FC<LRlayoutI>;
export interface LRlayoutI {
    title: string | React.ReactNode;
    cardAction?: React.ReactNode;
    cardTitle?: string;
    children: string | React.ReactNode;
    lrHelpText?: string | React.ReactNode;
    required?: boolean;
}
export default LRLayout;
