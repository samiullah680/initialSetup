import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Filter").Filter1>;
    argTypes: {
        filters: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        heading: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        button: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        disableReset: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        disableApply: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        onApply: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        onClose: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        resetFilter: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        icon: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        type: {
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
