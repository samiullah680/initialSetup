import React from "react";
import "./Filter.css";
declare const Filter: React.FC<Filter1>;
export interface FilterI {
    props?: Filter1;
}
export interface Filter1 {
    filters: FI[];
    heading?: string;
    button?: string;
    icon?: React.ReactNode;
    iconRound?: boolean;
    type?: "Primary" | "Plain" | "Danger" | "DangerOutlined" | "Secondary" | "Outlined" | "DangerPlain" | "TextButton";
    onApply?: () => void;
    resetFilter?: () => void;
    disableReset?: boolean;
}
export interface FI {
    name: string;
    children: React.ReactNode;
}
export default Filter;
