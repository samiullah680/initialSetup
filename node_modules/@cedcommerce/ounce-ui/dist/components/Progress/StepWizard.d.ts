import React from "react";
import "./StepWizard.css";
declare const StepWizard: React.FC<StepWizardI>;
export interface StepWizardI {
    steppercolor?: "complete" | "inprogress" | "pending";
    alignment?: "vertical" | "horizontal";
    textOrder?: "top" | "bottom" | any;
    utility?: string;
    StepHeading?: Array<string>;
    icon?: Array<React.ReactNode | string>;
    StepSubHeading?: Array<React.ReactNode | string>;
    enableNumbers?: boolean;
    halign?: "center" | "left" | "right";
}
export default StepWizard;
