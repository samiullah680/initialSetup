import React from 'react';
import { TextStylesI } from './TextStyles';
declare const _default: {
    title: string;
    component: React.FC<TextStylesI>;
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
        headingTypes: {
            control: {
                type: string;
                options: string[];
            };
        };
        subheadingTypes: {
            control: {
                type: string;
                options: string[];
            };
        };
        paragraphTypes: {
            control: {
                type: string;
                options: string[];
            };
        };
        displayTypes: {
            control: {
                type: string;
                options: string[];
            };
        };
        lineHeight: {
            control: {
                type: string;
                options: string[];
            };
        };
        textcolor: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        alignment: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        utility: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        fontweight: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        icon: {
            table: {
                disable: boolean;
            };
        };
        content: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Primary: (rest: TextStylesI) => JSX.Element;
export declare const TextStylesColors: any;
export declare const TextStylesFontWeight: any;
export declare const TextStylesAlignment: any;
export declare const TextStylesTypes: any;
export declare const TextStylesLineHeight: any;
