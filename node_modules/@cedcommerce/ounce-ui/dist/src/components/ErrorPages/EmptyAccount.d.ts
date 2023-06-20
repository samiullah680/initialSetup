import React from "react";
declare const EmptyAccount: ({ title, description, buttonText, icon, ...props }: EmptyAccountI) => JSX.Element;
export interface EmptyAccountI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
}
export default EmptyAccount;
