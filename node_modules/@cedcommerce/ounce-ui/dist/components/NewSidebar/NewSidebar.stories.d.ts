import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./NewSidebar").SidebarI>;
    argTypes: {
        menu: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: {
                id: string;
                content: string;
                path: string;
                icon: JSX.Element;
            }[];
        };
        subMenu: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: {
                id: string;
                content: string;
                path: string;
                icon: JSX.Element;
            }[];
        };
        logo: {
            control: {
                disable: boolean;
            };
        };
        path: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        mobileLogo: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        onChange: {
            description: string;
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Primary: any;
