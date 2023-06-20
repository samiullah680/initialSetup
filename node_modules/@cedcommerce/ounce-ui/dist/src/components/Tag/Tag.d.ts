import React from "react";
import "./Tag.css";
declare const Tag: React.FC<TagI>;
export interface TagI {
    children: React.ReactNode | string;
    destroy?: () => void;
}
export default Tag;
