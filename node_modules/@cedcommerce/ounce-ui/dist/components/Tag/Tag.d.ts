import React from "react";
import "./Tag.css";
declare const Tag: React.FC<TagI>;
export interface TagI {
    children: React.ReactNode | string;
    destroy?: () => void;
    popover?: boolean;
    count?: any;
    togglePopup?: (() => void) | any;
    toggle?: boolean;
}
export default Tag;
