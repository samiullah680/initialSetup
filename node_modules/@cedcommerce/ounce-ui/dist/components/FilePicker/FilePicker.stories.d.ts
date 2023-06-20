import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./FilePicker").FilePickerI>;
    argTypes: {
        format: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        minSize: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        maxSize: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
