import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Loader").LoaderI>;
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        subtitle: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        percentage: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
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
export declare const Loder1: any;
export declare const Loder2: any;
export declare const Loder3: any;
