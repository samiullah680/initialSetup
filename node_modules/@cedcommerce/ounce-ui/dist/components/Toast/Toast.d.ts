import React from "react";
import "./Toast.css";
declare const Toast: React.FC<ToastI>;
export interface ToastI {
    message?: string | React.ReactNode;
    type?: "success" | "warning" | "error" | "none";
    timeout?: number;
    onDismiss?: () => void;
}
export default Toast;
