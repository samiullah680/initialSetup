import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Image").ImageI>;
    argTypes: {
        src: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        alt: {
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
        height: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        width: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        radius: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        fit: {
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
export declare const Type: any;
export declare const Shape: any;
export declare const Fallback: any;
