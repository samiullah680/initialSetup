import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Topbar").TopbarI>;
    argTypes: {
        connectLeft: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        connectRight: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        account: {
            description: string;
            control: {
                type: string;
            };
        };
        darkMode: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Primary: ({ icon, ...rest }: any) => JSX.Element;
export declare const Topbar_with_announcement_bar: any;
