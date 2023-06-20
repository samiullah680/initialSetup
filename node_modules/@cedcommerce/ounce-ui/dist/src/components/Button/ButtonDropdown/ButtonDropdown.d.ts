import React from "react";
import "./ButtonDropdown.css";
declare function ButtonDropdown({ list, ...props }: ButtonDropdownI): JSX.Element;
declare namespace ButtonDropdown {
    var defaultProps: {
        children: string;
    };
}
export interface ButtonDropdownI {
    title: string;
    list: any;
    children?: string | React.ReactNode | JSX.Element | any;
    content?: string;
    type?: "Primary" | "Plain" | "Danger" | "DangerOutlined" | "Secondary" | "PlainDark" | "Small" | "Outlined" | "DangerPlain" | "TextButton";
    length?: "fullBtn" | "none";
    thickness?: "extraThin" | "thin" | "large";
    halign?: "Equal" | "End" | "Start" | "Between";
    icon?: React.ReactNode;
    onAction?: () => void;
    onClick?: () => void;
    loading?: boolean;
    disable?: boolean;
    iconAlign?: "left" | "right";
    iconRound?: boolean;
}
export default ButtonDropdown;
