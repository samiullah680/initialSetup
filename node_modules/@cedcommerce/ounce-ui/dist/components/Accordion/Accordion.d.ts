import React, { FC } from "react";
import "./Accordion.css";
declare const Accordion: FC<AccordionI>;
export interface AccordionI {
    children?: React.ReactNode | string;
    title?: string | React.ReactNode;
    active?: boolean | number;
    onClick?: () => void;
    icon?: boolean;
    iconAlign?: "left" | "right";
    boxed?: boolean;
}
export default Accordion;
