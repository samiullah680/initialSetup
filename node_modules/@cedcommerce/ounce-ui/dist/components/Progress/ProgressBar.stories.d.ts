import { Progressbar } from "..";
import { ProgressbarI } from "./Progressbar";
declare const _default: {
    title: string;
    component: typeof Progressbar;
    argTypes: {
        percentage: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        progessThickness: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        message: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        animating: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: (rest: ProgressbarI) => JSX.Element;
export declare const ProgressBarWithoutMessage: any;
export declare const ProgressThickness: any;
export declare const ProgressWithAnimation: any;
