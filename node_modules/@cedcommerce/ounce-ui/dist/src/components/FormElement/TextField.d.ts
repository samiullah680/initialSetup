import React from "react";
import "./FormElement.css";
declare const TextField: {
    ({ onChange, name, error, innerPreIcon, innerSufIcon, autocomplete, clearButton, strength, show, helpIcon, disabled, controlStates, ...props }: TextfieldI): JSX.Element;
    defaultProps: {
        type: string;
        placeHolder: string;
        value: string;
        thickness: string;
        onFocus: boolean;
        loading: boolean;
        required: boolean;
    };
};
export interface TextfieldI {
    onChange?: (e: string) => void;
    value?: string | number;
    name?: string | React.ReactNode;
    type?: "text" | "number" | "password" | "tel" | "url" | "email";
    placeHolder?: string;
    innerPreIcon?: React.ReactNode;
    innerSufIcon?: React.ReactNode;
    showHelp?: string;
    helpIcon?: React.ReactNode;
    suffix?: string | React.ReactNode;
    prefix?: string | React.ReactNode;
    onEnter?: () => void;
    onblur?: () => void;
    onKeyUp?: () => void;
    thickness?: "thin" | "";
    onFocus?: boolean;
    readOnly?: boolean;
    id?: string;
    error?: boolean;
    controlStates?: "Sucess" | "Warning" | "Error";
    loading?: boolean;
    autocomplete?: string;
    clearButton?: boolean;
    required?: boolean;
    min?: number;
    max?: number;
    tabIndex?: number;
    clearFunction?: () => void;
    show?: boolean;
    maxlength?: number | string | any;
    strength?: boolean;
    disabled?: boolean;
}
export default TextField;
