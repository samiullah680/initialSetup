import React from "react";
import "./Badge.css";
declare const Badge: React.FC<BadgeI>;
declare type Size = "small" | "regular";
export interface BadgeI {
    children: React.ReactNode | string;
    type?: "Positive-100" | "Positive-200" | "Positive-300" | "Negative-100" | "Negative-200" | "Negative-300" | "Warning-100" | "Warning-200" | "Warning-300" | "Info-100" | "Info-200" | "Info-300" | "Neutral-100-Border" | "Neutral-100" | "Neutral-200" | "Neutral-300" | "Neutral-400";
    badgeTextColor?: "dark" | "light" | string;
    position?: "top" | "bottom" | "left" | "right";
    size?: Size;
    helpText?: string | React.ReactNode;
    customBgColor?: string;
}
export default Badge;
