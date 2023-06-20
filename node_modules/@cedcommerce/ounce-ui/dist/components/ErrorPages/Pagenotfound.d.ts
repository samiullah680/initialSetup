import React from "react";
declare const PagenotFound: ({ title, description, onClick, buttonText, icon, image, }: PagenotFoundI) => JSX.Element;
export interface PagenotFoundI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    image?: any;
}
export default PagenotFound;
