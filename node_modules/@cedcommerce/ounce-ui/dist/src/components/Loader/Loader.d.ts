import React from "react";
import "./Loader.css";
declare const Loader: React.FC<LoaderI>;
export interface LoaderI {
    title?: string;
    type?: "Loader1" | "Loader2";
}
export default Loader;
