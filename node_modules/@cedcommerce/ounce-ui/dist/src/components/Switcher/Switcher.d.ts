import React from "react";
import "./Switcher.css";
export default function Switcher({ checked, onChange, name, disabled, textAligh, }: SwitcherI): JSX.Element;
export interface SwitcherI {
    checked?: boolean;
    onChange?: () => void;
    name?: React.ReactNode;
    disabled?: boolean;
    textAligh?: "left" | "right";
}
