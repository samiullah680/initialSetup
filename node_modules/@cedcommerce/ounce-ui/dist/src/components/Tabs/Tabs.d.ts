import React from "react";
import "./Tabs.css";
declare const Tabs: React.FC<TabsI>;
export declare type TabsI = {
    value?: NewI[] | any;
    selected?: string;
    onChange?: (id: string) => React.ReactNode | void | JSX.Element;
    disabled?: boolean;
    alignment?: "vertical" | "horizontal";
    children?: React.ReactNode | any;
};
export declare type NewI = {
    id: string;
    content?: any;
    disabled?: boolean;
    error?: boolean;
    badge?: boolean;
    badgeTextColor?: "dark" | "light";
    badgeContent?: string | number | React.ReactNode;
    customBgColors?: string;
    icon?: React.ReactNode | any;
};
export default Tabs;
