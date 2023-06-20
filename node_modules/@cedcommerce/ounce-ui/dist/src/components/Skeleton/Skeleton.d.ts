import React from "react";
import "./Skeleton.css";
declare const Skeleton: React.FC<SkeletonI>;
export interface SkeletonI {
    type?: "none" | "line" | "image" | "name" | "custom";
    width?: string;
    height?: string;
    line?: number;
    rounded?: string;
}
export default Skeleton;
