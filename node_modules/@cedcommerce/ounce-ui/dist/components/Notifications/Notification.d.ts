import React, { ReactNode } from "react";
import "./Notification.css";
declare const Notification: React.FC<NotificationI>;
export interface NotificationI {
    type: "warning" | "success" | "danger" | "info";
    children?: any;
    desciption?: string | ReactNode;
    subdesciption?: string | ReactNode;
    onClose?: () => void;
    destroy?: boolean;
    icon?: boolean;
}
export default Notification;
