import React, { FC } from "react";
import "./AutoComplete.css";
declare const AutoComplete: FC<AutoCompleteI>;
export interface AutoCompleteI {
    options?: any;
    value?: string;
    name?: string;
    onEnter?: (e: string) => void;
    onChange?: (e: string) => void;
    thickness?: "thin" | "";
    showHelp?: string;
    placeholder?: string;
    innerPreIcon?: string | React.ReactNode;
    innerSufIcon?: React.ReactNode;
    PreIcon?: boolean;
    SufIcon?: boolean;
}
export default AutoComplete;
