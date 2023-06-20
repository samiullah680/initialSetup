import React from "react";
declare const SessionExpired: ({ title, buttonText, onClick, description, icon, image, }: SessionExpiredI) => JSX.Element;
export interface SessionExpiredI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    image?: any;
}
export default SessionExpired;
