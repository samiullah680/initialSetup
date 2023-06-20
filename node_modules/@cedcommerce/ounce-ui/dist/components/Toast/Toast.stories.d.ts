import { Toast } from "..";
declare const _default: {
    title: string;
    component: typeof Toast;
    argTypes: {
        message: {
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
                options: string[];
            };
            defaultValue: string;
        };
        timeout: {
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
export declare const Success: any;
export declare const Warning: any;
export declare const Error: any;
export declare const None: any;
export declare const Timeout: any;
