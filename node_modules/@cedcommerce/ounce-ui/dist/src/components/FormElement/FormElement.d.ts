import React from "react";
import "./FormElement.css";
declare const FormElement: React.FC<FormElementI>;
export interface FormElementI {
    horizontal?: boolean;
    condensed?: boolean;
    children?: any;
}
export default FormElement;
