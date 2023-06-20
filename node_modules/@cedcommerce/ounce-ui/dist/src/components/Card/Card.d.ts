import React, { FC } from "react";
import { CardFooterI } from "./CardFooter";
import { CardHeaderI } from "./CardHeader";
declare const Card: FC<CardI>;
export interface CardI extends CardFooterI, CardHeaderI {
    children: React.ReactNode;
    cardType?: "Default" | "Bordered" | "Plain" | "Subdued" | "Shadowed";
    extraClass?: string;
    header?: any;
    media?: string;
}
export default Card;
