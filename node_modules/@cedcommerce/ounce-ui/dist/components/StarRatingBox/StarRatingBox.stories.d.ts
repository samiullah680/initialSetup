declare const _default: {
    title: string;
    component: ({ defaultColor, present, onClick, size, spacing, }: import("./StarRatingBox").StarRatingI) => JSX.Element;
    argTypes: {
        present: {
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
