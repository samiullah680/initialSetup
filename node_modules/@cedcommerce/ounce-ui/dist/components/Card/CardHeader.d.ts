import React from "react";
import { TextStylesI } from "../TextStyles/TextStyles";
export interface CardHeaderI {
    title?: TextStylesI | string | React.ReactNode | any;
    subTitle?: TextStylesI | string | React.ReactNode | any;
    action?: React.ReactNode;
}
declare function CardHeader({ title, action, subTitle, }: CardHeaderI): JSX.Element | null;
export default CardHeader;
