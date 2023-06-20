import React from "react";
import "./Loader.css";
declare const Loader: React.FC<LoaderI>;
export interface LoaderI {
    title?: string | any;
    subtitle?: string;
    type?: "Loader1" | "Loader2" | "Loader3";
    percentage?: number;
}
export default Loader;
