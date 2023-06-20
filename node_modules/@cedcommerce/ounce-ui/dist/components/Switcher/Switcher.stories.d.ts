import Switcher from "./Switcher";
declare const _default: {
    title: string;
    component: typeof Switcher;
    argTypes: {
        checked: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        name: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        textAligh: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Disabled: any;
export declare const Text_Aligh_Left: any;
export declare const Text_Aligh_Right: any;
export declare const Without_Name: any;
