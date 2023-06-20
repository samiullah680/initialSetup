import React from "react";
declare const PagenotFound: ({ title, description, onClick, buttonText, icon, }: PagenotFoundI) => JSX.Element;
export interface PagenotFoundI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
}
export default PagenotFound;
