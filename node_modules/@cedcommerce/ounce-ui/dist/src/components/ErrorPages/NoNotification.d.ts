import React from "react";
declare const NoNotification: ({ title, buttonText, description, onClick, icon, }: NoNotificationI) => JSX.Element;
export interface NoNotificationI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
}
export default NoNotification;
