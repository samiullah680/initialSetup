import React from "react";
import "./FlexStories.css";
declare const _default: {
    title: string;
    component: React.FC<import("./FlexLayout").FlexLayoutI>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        valign: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        valignTab: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        valignMob: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        halign: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        halignTab: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        halignMob: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        direction: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        spacing: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        childWidth: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        mobileWidth: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        tabWidth: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        desktopWidth: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        order: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        directionTab: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        directionMob: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        wrap: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        wrapTab: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        wrapMob: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const ParentControl: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const ChildControl: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Children_vertical_align: any;
export declare const Children_horizontal_align: any;
export declare const Children_Spacing: any;
export declare const Children_direction: any;
export declare const Children_Width: any;
export declare const Children_width_Control_via_parent_width: any;
