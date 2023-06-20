import React, { Component } from "react";
import "./Sidebar.css";
declare class Sidebar extends Component<SidebarI, StateI> {
    [x: string]: any;
    handleSidebar: () => void;
    constructor(props: SidebarI);
    componentWillUnmount(): void;
    toggleSidebar: () => void;
    ValidateSideMenus: (menus?: MenuI[]) => MenuI[];
    removeClassAll: () => void;
    renderSideBarMenu: (menus: MenuI[]) => JSX.Element[];
    renderSubSideBarMenu: (menus: MenuI[]) => React.ReactNode;
    render(): React.ReactNode;
}
export interface StateI {
    isActive: boolean;
    y_value: number;
    sideMenus: MenuI[];
    subMenu: MenuI[];
    sidebarOpen?: boolean;
    toggleexpandView?: boolean;
    toggle?: boolean;
}
export interface SidebarI {
    menu: MenuI[];
    subMenu: MenuI[];
    logo?: undefined | React.ReactNode;
    mobileLogo?: undefined | React.ReactNode;
    onChange: (menu: MenuI) => void;
    path?: string;
}
export interface MenuI extends ChildI {
    id: string;
    content: string;
    path: string;
    icon?: React.ReactNode;
}
interface ChildI {
    children?: MenuI[];
}
export default Sidebar;
