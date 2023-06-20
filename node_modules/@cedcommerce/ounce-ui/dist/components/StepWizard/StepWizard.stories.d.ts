import React from "react";
import "antd/dist/antd.css";
declare const _default: {
    title: string;
    component: React.FC<import("./StepWizard").StepI>;
    argTypes: {
        direction: {
            control: {
                type: string;
                options: string[];
            };
        };
        initial: {
            control: {
                type: string;
            };
        };
        status: {
            control: {
                type: string;
                options: string[];
            };
        };
        current: {
            control: {
                type: string;
            };
            defaultValue: number;
        };
    };
};
export default _default;
export declare const Primary: any;
