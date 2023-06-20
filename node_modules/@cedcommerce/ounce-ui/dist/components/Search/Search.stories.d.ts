import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Search").SearchI>;
    argTypes: {
        name: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        onEnter: {
            control: {
                type: string;
            };
        };
        onChange: {
            control: {
                type: string;
            };
        };
        value: {
            control: {
                type: string;
            };
        };
        thickness: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        options: {
            control: {
                disable: boolean;
            };
        };
        placeHolder: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
