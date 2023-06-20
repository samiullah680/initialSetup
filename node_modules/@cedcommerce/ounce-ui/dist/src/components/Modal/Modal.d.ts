import React from "react";
import { ButtonI } from "../Button/Button";
import "./Modal.css";
declare const Modal: React.FC<ModalI>;
export interface ModalI {
    children: React.ReactNode;
    heading?: string;
    open: boolean;
    modalSize?: "small" | "medium" | "large";
    close: () => void;
    primaryAction?: ButtonI;
    secondaryAction?: ButtonI;
}
export default Modal;
