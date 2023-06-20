import React from "react";
import "./FormElement.css";
declare const CheckBox: React.FC<CheckBoxI>;
export interface CheckBoxI {
    checked?: boolean;
    onClick?: () => void | string;
    labelVal?: string;
    id?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    description?: string;
}
export default CheckBox;
