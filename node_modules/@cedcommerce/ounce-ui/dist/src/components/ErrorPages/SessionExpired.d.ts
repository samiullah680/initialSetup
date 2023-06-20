import React from "react";
declare const SessionExpired: ({ title, buttonText, onClick, description, icon, }: SessionExpiredI) => JSX.Element;
export interface SessionExpiredI {
    title?: string;
    buttonText?: string;
    description?: string | React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
}
export default SessionExpired;
