import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Breadcrumb").BreadcrumbI>;
    argTypes: {
        items: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        onClick: {
            description: string;
            type: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
