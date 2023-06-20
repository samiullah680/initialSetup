import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Wysiwyg.css";
declare const Wysiwyg: React.FC<WysiwygI>;
export interface WysiwygI {
    editorState?: any;
    onEditorStateChange?: any;
}
export default Wysiwyg;
