import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Popover").PopoverI>;
    argTypes: {
        open: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        activator: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        popoverContainer: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        popoverWidth: {
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
export declare const Popover_with_body_container: any;
export declare const popover_with_element_container: any;
