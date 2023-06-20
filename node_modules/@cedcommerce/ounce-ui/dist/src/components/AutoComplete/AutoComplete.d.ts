import React from "react";
import "./AutoComplete.css";
declare function AutoComplete({ options, value, onChange, onEnter, name, innerPreIcon, innerSufIcon, showHelp, thickness, setHiglighted, placeHolder, loading, }: SearchI): JSX.Element;
export interface SearchI {
    options?: any;
    value?: string;
    name?: string;
    onEnter?: ((e: string) => void) | any;
    onChange?: ((e: string) => void) | any;
    thickness?: "thin" | "";
    placeHolder?: string;
    showHelp?: string;
    innerPreIcon?: string | React.ReactNode;
    innerSufIcon?: React.ReactNode;
    setHiglighted?: boolean;
    loading?: boolean;
}
export default AutoComplete;
