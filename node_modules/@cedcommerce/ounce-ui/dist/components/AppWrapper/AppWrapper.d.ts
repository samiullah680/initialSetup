import React from "react";
import "./AppWrapper.css";
export declare const AppWrapper: ({ children, Layout }: PropsI) => JSX.Element;
export declare const BodyLayout: ({ children, Layout }: PropsI) => JSX.Element;
export interface PropsI {
    children?: React.ReactNode | JSX.Element;
    Layout?: "Boxed" | "Full";
}
