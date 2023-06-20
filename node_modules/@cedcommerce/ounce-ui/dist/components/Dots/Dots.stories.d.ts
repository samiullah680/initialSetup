import React from "react";
import { DotI } from "./Dots";
declare const _default: {
    title: string;
    component: React.FC<DotI>;
    argTypes: {
        status: {
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
export declare const Primary: (rest: DotI) => JSX.Element;
export declare const Status: any;
