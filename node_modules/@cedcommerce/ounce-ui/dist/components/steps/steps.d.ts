import React from "react";
import "./steps.css";
declare const StepWizads: React.FC<StepI>;
export interface StepI {
    status?: "wait" | "process" | "finish" | "error";
    className?: string;
    current?: number;
    direction?: "horizontal" | "vertical";
    initial?: number;
    size?: "default" | "small";
    type?: "default" | "navigation";
    onChange?: (() => void) | any;
    data?: any;
}
export default StepWizads;
