import React from "react";
import "./Topbar.css";
declare const Topbar: React.FC<TopbarI>;
export interface TopbarI {
    connectLeft?: React.ReactNode;
    connectRight?: React.ReactNode;
    account?: AccountI;
    darkMode?: boolean;
}
export interface AccountI {
    name?: string | React.ReactNode;
    url?: string | React.ReactNode;
    image?: string;
    userPopoverMenu?: React.ReactNode;
}
export default Topbar;
