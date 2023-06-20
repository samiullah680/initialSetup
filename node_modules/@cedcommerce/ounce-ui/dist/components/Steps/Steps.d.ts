import React from "react";
import "./Steps.css";
declare const StepWizard: React.FC<StepI>;
export interface StepI {
    status?: "wait" | "process" | "finish" | "error";
    className?: string;
    current?: number;
    direction?: "horizontal" | "vertical";
    initial?: number;
    onChange?: (() => void) | any;
    data?: any;
}
export default StepWizard;
