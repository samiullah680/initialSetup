import { box, home, note, setting } from "@cedcommerce/ounce-ui";
import React from "react";

export const Menu: MenuObj[] | any = [
    {
        url: "/dashboard",
        content: 'Dashboard',
        path: 'dashboard',
        showPage: true,
        icon: home,
        showTargetSelect: true,
        heading: 'Dashboard',
    },
    {
        url: "/products",
        content: 'Product Listing',
        path: 'products',
        showPage: true,
        icon: box,
        showTargetSelect: true,
        heading: 'Product List',
    },
    // {
    //     url: "/templates",
    //     content: 'Templates',
    //     path: 'templates',
    //     showPage: true,
    //     icon:
    //         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="#3B424F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    //             <path d="M8.3335 5.8335H5.8335V13.3335H8.3335V5.8335Z" stroke="#3B424F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    //             <path d="M14.1665 5.8335H11.6665V10.0002H14.1665V5.8335Z" stroke="#3B424F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    //         </svg>
    //     ,
    //     showTargetSelect: true,
    //     heading: 'Templates',
    // },
    {
        url: "/config",
        content: 'Settings',
        showPage: true,
        showTargetSelect: true,
        icon: setting,
        path: 'config',
        heading: 'Settings',
    },
    {
        url: "/help",
        content: 'Help',
        showPage: true,
        path: 'help',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none">
                <path
                    d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                    stroke="#707070"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.3625 11.25C11.6564 10.4146 12.2364 9.71011 12.9999 9.2614C13.7634 8.81268 14.6611 8.64865 15.534 8.79837C16.4068 8.94809 17.1985 9.40188 17.7688 10.0794C18.3392 10.7569 18.6513 11.6144 18.65 12.5C18.65 15 14.9 16.25 14.9 16.25"
                    stroke="#707070"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 21.25H15.0125"
                    stroke="#707070"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        heading: 'FAQ & Troubleshoot',
        page_description: 'Find solutions to all your Queries'
    }
];

export const SubMenu: MenuObj[] | any = [
    // {
    //     url: "/faq",
    //     content: 'faq',
    //     showPage: true,
    //     path: 'faq',
    //     icon: (
    //         <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="25"
    //             height="25"
    //             viewBox="0 0 30 30"
    //             fill="none">
    //             <path
    //                 d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
    //                 stroke="#707070"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //             <path
    //                 d="M11.3625 11.25C11.6564 10.4146 12.2364 9.71011 12.9999 9.2614C13.7634 8.81268 14.6611 8.64865 15.534 8.79837C16.4068 8.94809 17.1985 9.40188 17.7688 10.0794C18.3392 10.7569 18.6513 11.6144 18.65 12.5C18.65 15 14.9 16.25 14.9 16.25"
    //                 stroke="#707070"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //             <path
    //                 d="M15 21.25H15.0125"
    //                 stroke="#707070"
    //                 strokeWidth="2"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //         </svg>
    //     ),
    //     heading: 'FAQ & Troubleshoot',
    //     page_description: 'Find solutions to all your Queries'
    // }
];

export interface MenuObj {
    url: string,
    content: string,
    path: string,
    heading: string,
    hidden?: boolean,
    page_description?: string,
    breadcrum?: string | -1 | boolean,
    showTargetSelect?: boolean,
    showPage?: boolean,
}