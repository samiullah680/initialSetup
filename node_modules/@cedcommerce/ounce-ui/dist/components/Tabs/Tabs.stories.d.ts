import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Tabs").TabsI>;
    argTypes: {
        value: {
            control: {
                type: string;
                disable: boolean;
            };
        };
        selected: {
            control: {
                type: string;
            };
        };
        disabled: {
            control: {
                type: string;
            };
        };
        onChange: {
            control: {
                type: string;
            };
        };
        alignment: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        animate: {
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
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const vertical_without_badge: any;
export declare const horizontal_without_badge: any;
export declare const vertical_with_badges: any;
export declare const horizontal_with_badge: any;
