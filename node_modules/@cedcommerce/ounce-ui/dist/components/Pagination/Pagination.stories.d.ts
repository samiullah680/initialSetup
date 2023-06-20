import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Pagination").PaginationI>;
    argTypes: {
        totalPages: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        totalitem: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        currentPage: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: number;
        };
        onNext: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        countPerPage: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        optionPerPage: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: {
                label: string;
                value: string;
            }[];
        };
        onPrevious: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        onCountChange: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        simpleView: {
            description: string;
            control: {
                type: string;
                boolean: boolean;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
