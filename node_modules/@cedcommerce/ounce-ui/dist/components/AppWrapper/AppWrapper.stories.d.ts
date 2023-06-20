declare const _default: {
    title: string;
    component: ({ children, Layout }: import("./AppWrapper").PropsI) => JSX.Element;
    argTypes: {
        children: {
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
