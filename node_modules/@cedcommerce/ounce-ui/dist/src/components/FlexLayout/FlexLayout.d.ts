import React from "react";
declare const FlexLayout: React.FC<FlexLayoutI>;
export interface FlexLayoutI {
    valign?: "start" | "center" | "end" | "stretch" | "none";
    valignTab?: "start" | "center" | "end" | "stretch" | "none";
    valignMob?: "start" | "center" | "end" | "stretch" | "none";
    halign?: "start" | "center" | "end" | "fill" | "around" | "evenly" | "none";
    halignTab?: "start" | "center" | "end" | "fill" | "around" | "evenly" | "none";
    halignMob?: "start" | "center" | "end" | "fill" | "around" | "evenly" | "none";
    spacing?: "none" | "tight" | "mediumTight" | "extraTight" | "loose" | "mediumLoose" | "extraLoose";
    direction?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
    directionTab?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
    directionMob?: "vertical" | "vertical-reverse" | "row-reverse" | "none";
    wrap?: "wrap" | "noWrap" | "none";
    wrapTab?: "wrap" | "noWrap" | "none";
    wrapMob?: "wrap" | "noWrap" | "none";
    children?: JSX.Element | React.ReactNode;
    childWidth?: "fullWidth" | "none";
    mobileWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
    tabWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
    desktopWidth?: "100" | "80" | "75" | "66" | "50" | "33" | "25" | "20" | "";
}
export default FlexLayout;
