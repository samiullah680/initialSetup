import React from "react";
import "./Video.css";
declare const Video: React.FC<VideoI>;
export interface VideoI {
    src?: string;
    width?: string;
    height?: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    poster?: string;
    type?: string;
    preload?: "auto" | "metadata" | "none";
}
export default Video;
