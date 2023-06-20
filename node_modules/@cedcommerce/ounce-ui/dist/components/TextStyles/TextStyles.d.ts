import React from "react";
import "./TextStyles.css";
declare const TextStyles: React.FC<TextStylesI>;
export interface TextStylesI {
    children?: string | React.ReactNode;
    type?: "Heading" | "SubHeading" | "Paragraph" | "Display" | string;
    headingTypes?: "LG-2.8" | "MD-2.7";
    subheadingTypes?: "LG-2.5" | "MD-2.2" | "SM-1.8" | "XS-1.6";
    paragraphTypes?: "LG-1.5" | "MD-1.4" | "SM-1.3" | "XS-1.2";
    displayTypes?: "XL-4.3" | "LG-3.8" | "MD-3.6" | "SM-3.4" | "XS-3.2";
    lineHeight?: "LH-1.4" | "LH-1.6" | "LH-2.0" | "LH-2.4" | "LH-2.8" | "LH-3.2" | "LH-3.6" | "LH-4.0" | "LH-4.4" | "LH-4.8";
    textcolor?: "dark" | "light" | "positive" | "negative" | string;
    fontweight?: "light" | "normal" | "bold" | "extraBold" | "extraBolder";
    alignment?: "left" | "right" | "center" | "none";
    utility?: string;
    icon?: React.ReactNode;
    content?: string | React.ReactNode;
}
export default TextStyles;
