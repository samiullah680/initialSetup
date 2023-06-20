import "./FormElement.css";
declare const TextArea: ({ type, placeHolder, value, thickness, onFocus, required, showHelp, onChange, onEnter, name, rows, error, readOnly, ...props }: TextfieldI) => JSX.Element;
export interface TextfieldI {
    onChange?: (e: string) => void;
    value?: string | number;
    name?: string;
    type?: "textarea" | "badge";
    placeHolder?: string;
    showHelp?: string;
    onEnter?: (arr: any) => void;
    thickness?: "thin" | "";
    onFocus?: boolean;
    readOnly?: boolean;
    id?: string;
    error?: boolean;
    rows?: number;
    required?: boolean;
}
export default TextArea;
