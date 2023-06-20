import React from "react";
declare const BrokenPage: ({ title, description, buttonText, onClick, icon, image }: BrokenPageI) => JSX.Element;
export interface BrokenPageI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    image?: any;
}
export default BrokenPage;
