import React from "react";
import { BadgeI } from "./Badge";
declare const _default: {
    title: string;
    component: React.FC<BadgeI>;
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        size: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        badgeTextColor: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        helpText: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        customBgColor: {
            description: string;
            control: {
                type: string;
            };
        };
        position: {
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
export declare const Primary: any;
export declare const Types: any;
export declare const Badge_Text_Color: any;
export declare const Size: any;
export declare const BadgeWithHelpText: any;
export declare const BadgeWithOutHelpText: any;
export declare const BadgeHelpTextPosition: any;
