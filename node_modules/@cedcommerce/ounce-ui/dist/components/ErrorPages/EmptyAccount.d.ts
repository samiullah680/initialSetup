import React from "react";
declare const EmptyAccount: ({ title, description, buttonText, icon, image, ...props }: EmptyAccountI) => JSX.Element;
export interface EmptyAccountI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    image?: any;
}
export default EmptyAccount;
