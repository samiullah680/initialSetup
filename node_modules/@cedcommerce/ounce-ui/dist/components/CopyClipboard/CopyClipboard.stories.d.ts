import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./CopyClipboard").CopyClipboardI>;
    argTypes: {
        value: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        label: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        align: {
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
