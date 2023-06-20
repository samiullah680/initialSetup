import React from "react";
import "./FilePicker.css";
declare const FilePicker: React.FC<FilePickerI>;
export interface FilePickerI {
    format?: string;
    minSize?: number;
    maxSize?: number;
    onChange?: (e: Event) => void;
}
export default FilePicker;
