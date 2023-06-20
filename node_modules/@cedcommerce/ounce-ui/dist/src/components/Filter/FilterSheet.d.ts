import React from "react";
import { FI } from "./Filter";
import "./Filter.css";
declare const FilterSheet: React.FC<FilterSheetI>;
export interface FilterSheetI {
    filters: FI[];
    heading?: string | undefined;
    onApply?: () => void;
    resetFilter?: () => void;
    handleToggle?: () => void;
    disableReset?: boolean;
}
export default FilterSheet;
