import React from "react";
import "./upload.css";
interface FileUploadI {
    children: React.ReactNode;
    value?: any;
    onChange: (e: Event) => void;
    multiple?: boolean;
    format?: string[];
}
declare const FileUpload: React.FC<FileUploadI>;
export default FileUpload;
