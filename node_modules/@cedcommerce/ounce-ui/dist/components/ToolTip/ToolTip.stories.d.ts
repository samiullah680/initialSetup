import ToolTip from "./ToolTip";
declare const _default: {
    title: string;
    component: typeof ToolTip;
    argTypes: {
        children: {
            control: {
                type: string;
            };
        };
        helpText: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        position: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        type: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        popoverContainer: {
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        button: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Tooltip_position: any;
export declare const Tooltip_type: any;
export declare const Tooltip_Body_container: any;
