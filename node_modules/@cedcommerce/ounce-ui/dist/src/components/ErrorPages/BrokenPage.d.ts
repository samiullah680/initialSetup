import React from "react";
declare const BrokenPage: ({ title, description, buttonText, onClick, icon, }: BrokenPageI) => JSX.Element;
export interface BrokenPageI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
}
export default BrokenPage;
