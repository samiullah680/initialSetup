import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Video").VideoI>;
    argTypes: {
        src: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        width: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        height: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        controls: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        autoPlay: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        loop: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        muted: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        preload: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        poster: {
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
            };
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
