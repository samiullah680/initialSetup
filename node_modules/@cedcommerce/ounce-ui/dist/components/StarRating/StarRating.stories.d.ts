declare const _default: {
    title: string;
    component: ({ activeColor, defaultColor, maximum, present, onClick, size, spacing, }: import("./StarRating").PropsI) => JSX.Element;
    argTypes: {
        present: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        maximum: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        defaultColor: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        activeColor: {
            desciption: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        onClick: {
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        spacing: {
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
