import React from "react";
import "../../styles.module.css";
import "./FormElement.css";
export interface SelectI {
    options?: Array<ObjI>;
    thickness?: "thin" | "thick";
    onChange?: (value: string, obj?: ObjI) => void;
    value?: string[];
    name?: string | React.ReactNode;
    selectHelp?: string | React.ReactNode;
    helpIcon?: React.ReactNode;
    placeholder?: string;
    showBadges?: boolean;
    error?: boolean;
    searchEable?: boolean;
    disabled?: boolean;
    childFlexOptions?: any;
    ellipsis?: boolean;
    popoverContainer?: "body" | "element";
    required?: boolean;
}
interface ObjI extends GroupI {
    label: string;
    value: string;
    groupLabel?: string;
    description?: string;
}
interface GroupI {
    group?: ObjI[];
}
declare function ChoiceList({ thickness, options, onChange, value, selectHelp, helpIcon, name, error, placeholder, showBadges, disabled, ellipsis, searchEable, childFlexOptions, required, popoverContainer, }: SelectI): JSX.Element;
export declare const getScrollParent: (node: any) => any;
export default ChoiceList;
