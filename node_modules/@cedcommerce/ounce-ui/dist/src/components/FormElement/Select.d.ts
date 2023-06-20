import React from "react";
import "../../styles.module.css";
import "./FormElement.css";
declare function Select({ thickness, options, onChange, value, selectHelp, name, placeholder, error, disabled, searchEable, labelInLine, loading, ellipsis, helpIcon, dropDownheight, position, popoverContainer, required, ...props }: SelectI): JSX.Element;
export declare const getScrollParent: (node: any) => any;
export declare type SelectI = {
    options?: Array<ObjI>;
    thickness?: "thin" | "regular";
    onChange?: (value: string, obj?: ObjI) => void;
    onblur?: () => void;
    value?: string;
    name?: string | React.ReactNode;
    selectHelp?: string | React.ReactNode;
    helpIcon?: React.ReactNode;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
    searchEable?: boolean;
    labelInLine?: boolean;
    loading?: boolean;
    ellipsis?: boolean;
    dropDownheight?: number;
    position?: "top" | "bottom";
    popoverContainer?: "body" | "element";
    required?: boolean;
};
interface ObjI extends GroupI {
    label: string | React.ReactNode;
    value: string;
}
interface GroupI {
    group?: ObjI[];
}
export default Select;
