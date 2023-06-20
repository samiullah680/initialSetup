import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<import("./Notification").NotificationI>;
    argTypes: {
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        children: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        onClose: {
            control: {
                type: string;
            };
        };
        destroy: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        icon: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        desciption: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        subdesciption: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ icon, ...rest }: any) => JSX.Element;
export declare const Types: any;
export declare const NotificationWithout_destroy: any;
export declare const NotificationWithDescription: any;
export declare const NotificationWithSubDescription: any;
export declare const NotificationWithoutIcon: any;
