import React from "react";
declare const NoProduct: ({ title, description, buttonText, image, ...props }: NoProductI) => JSX.Element;
export interface NoProductI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    image?: any;
}
export default NoProduct;
