import React from "react";
import "./NewSidebar.css";
declare const NewSidebars: React.FC<SidebarI>;
export interface SidebarI {
    menu: any;
    subMenu?: any;
    logo?: undefined | React.ReactNode;
    mobileLogo?: undefined | React.ReactNode;
    onChange?: (() => void) | any;
    path?: string;
}
export default NewSidebars;
