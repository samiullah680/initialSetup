import React from "react";
import "./OverlappingImages.css";
declare const OverlappingImages: React.FC<OverlappingImagesI>;
export interface OverlappingImagesI {
    children: React.ReactNode;
    size?: string;
}
export default OverlappingImages;
