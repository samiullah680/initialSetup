import React from "react";
declare const FlexChild: React.FC<FlexChildI>;
export interface FlexChildI {
    children: JSX.Element;
    mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
    tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
    desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
    childWidth?: "fullWidth" | "none";
    order?: string;
    __TYPE?: string;
}
export default FlexChild;
