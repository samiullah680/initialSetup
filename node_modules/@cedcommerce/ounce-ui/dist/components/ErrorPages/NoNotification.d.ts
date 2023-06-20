import React from "react";
declare const NoNotification: ({ title, buttonText, description, onClick, icon, image, }: NoNotificationI) => JSX.Element;
export interface NoNotificationI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    image?: any;
}
export default NoNotification;
