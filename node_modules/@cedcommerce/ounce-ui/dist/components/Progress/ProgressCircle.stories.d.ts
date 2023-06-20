import { Story } from "@storybook/react";
import { ProgressCircle } from "..";
import { ProgressCircle1 } from "./progressCircle";
declare const _default: {
    title: string;
    component: typeof ProgressCircle;
    argTypes: {
        percentage: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        size: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        enablePercent: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        fontsize: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
    };
};
export default _default;
export declare const Primary: Story<ProgressCircle1>;
export declare const ProgressCircleSize: any;
export declare const ProgressCircleWithoutPercentage: any;
export declare const ProgressCircleWithDiffrentFontSize: any;
