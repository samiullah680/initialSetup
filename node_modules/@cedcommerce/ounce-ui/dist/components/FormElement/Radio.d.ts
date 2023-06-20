import React from "react";
import "./FormElement.css";
declare const Radio: React.FC<CheckBoxI>;
export interface CheckBoxI {
    onClick?: () => void;
    name?: string;
    labelVal?: string;
    value?: string | number;
    id?: string;
    checked?: boolean;
    required?: boolean;
    disabled?: boolean;
    description?: string;
}
export default Radio;
