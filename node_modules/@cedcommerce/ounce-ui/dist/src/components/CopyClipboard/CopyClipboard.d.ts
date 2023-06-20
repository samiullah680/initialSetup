import { FC } from "react";
declare const CopyClipboard: FC<CopyClipboardI>;
export interface CopyClipboardI {
    value?: string;
    label?: string;
    align?: "fill" | "center" | "end" | "none";
}
export default CopyClipboard;
