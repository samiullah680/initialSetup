declare const _default: {
    title: string;
    component: (props: any) => JSX.Element;
    argTypes: {
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        minSize: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        maxSize: {
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
