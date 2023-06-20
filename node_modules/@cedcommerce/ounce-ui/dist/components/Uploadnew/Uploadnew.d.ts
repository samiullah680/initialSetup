import "./upload.css";
declare function Uploadnew({ name, children, listType, className, uploadbutton, showUploadList, directory, accept, maxCount, multiple, drag, onChange, disabled, beforeUpload, openFileDialogOnClick, }: UploadI): JSX.Element;
export interface UploadI {
    name?: string;
    children?: any;
    listType?: "text" | "picture" | "picture-card";
    className?: string;
    showUploadList?: boolean;
    action?: any;
    uploadbutton?: boolean;
    directory?: boolean;
    beforeUpload?: (() => void) | any;
    onChange?: (() => void) | any;
    accept?: any;
    multiple?: boolean;
    maxCount?: number;
    drag?: boolean;
    disabled?: boolean;
    openFileDialogOnClick?: boolean;
}
export default Uploadnew;
