import React from "react";
import "antd/dist/antd.css";
declare const _default: {
    title: string;
    component: React.FC<import("./RangeSlider").RangeSliderI>;
    argTypes: {
        range: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        dots: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        tooltipVisible: {
            description: string;
            control: {
                type: string;
            };
        };
        tooltipPlacement: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        vertical: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        step: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        autoFocus: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        included: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        reverse: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        min: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        max: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        defaultValue: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        marks: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        tipFormatter: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        onAfterChange: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        onChange: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        className: {
            description: string;
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Simple: any;
export declare const Double: any;
export declare const Dots: any;
export declare const reverse: any;
export declare const vertical: any;
export declare const Tooltip_Visible: any;
export declare const Step: any;
export declare const Tooltip_Position: any;
export declare const Disabled: any;
export declare const Marks: any;
export declare const Draggable_Track: any;
export declare const TipFormatter: any;
