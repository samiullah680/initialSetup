import React from "react";
import { FI } from "./AdvanceFilter";
import "./AdvanceFilter.css";
declare const AdvanceFilterSheet: React.FC<FilterSheetI>;
export interface FilterSheetI {
    filters: FI[];
    heading?: string | undefined;
    onApply?: () => void;
    onClose?: () => void;
    resetFilter?: () => void;
    handleToggle?: () => void;
    disableReset?: boolean;
    disableApply?: boolean;
    badgeCounter?: number | string;
}
export default AdvanceFilterSheet;
