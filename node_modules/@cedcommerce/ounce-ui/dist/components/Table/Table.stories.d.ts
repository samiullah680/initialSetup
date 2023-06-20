import { Table } from "..";
declare const _default: {
    title: string;
    component: typeof Table;
    argTypes: {
        columns: {
            control: {
                type: string;
            };
            defaultValue: {
                hello: {
                    title: string;
                };
            };
        };
        rows: {
            control: {
                type: string;
            };
            defaultValue: {
                user: string;
                name: string;
                address: string;
                email: string;
            }[];
        };
    };
};
export default _default;
export declare const Primary: () => JSX.Element;
