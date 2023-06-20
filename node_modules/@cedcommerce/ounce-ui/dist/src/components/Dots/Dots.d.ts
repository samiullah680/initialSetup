import React from "react";
import "../../styles.module.css";
import "./Dots.css";
declare const Dots: React.FC<DotI>;
export interface DotI {
    status?: "active" | "completed" | "none";
}
export default Dots;
