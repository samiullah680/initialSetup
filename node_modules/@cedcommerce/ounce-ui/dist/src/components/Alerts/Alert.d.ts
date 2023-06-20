import React, { ReactNode } from "react";
import "./Alert.css";
declare const Alert: React.FC<AlertI>;
export interface AlertI {
    type: "warning" | "success" | "danger" | "info";
    children: any;
    desciption?: string | ReactNode;
    onClose?: () => void;
    destroy?: boolean;
}
export default Alert;
