import React from "react";
import "./AnnouncementBar.css";
declare const AnnouncementBar: React.FC<AnnouncementBarI>;
export interface AnnouncementBarI {
    type?: "warning" | "success" | "danger" | "info";
    align?: "right" | "left" | "center";
    children?: any;
    onClose?: () => void;
    destroy?: boolean;
    active?: boolean;
}
export default AnnouncementBar;
