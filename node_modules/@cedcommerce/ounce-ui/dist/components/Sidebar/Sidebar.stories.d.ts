import { Sidebar } from "../../index";
declare const _default: {
    title: string;
    component: typeof Sidebar;
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
    };
};
export default _default;
export declare const Primary: any;
