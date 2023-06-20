import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./LRLayout").LRlayoutI>;
    argTypes: {
        children: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        title: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        lrHelpText: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        cardTitle: {
            description: string;
            control: {
                type: string;
            };
        };
        required: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const LR_Layout_with_simple_help_text: () => JSX.Element;
export declare const LR_Layout_with_custom_help_text: () => JSX.Element;
export declare const LR_Layout_with_Card_Header_and_Action: () => JSX.Element;
