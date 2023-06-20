import React from "react";
declare function PageHeader({ title, action, children, description, sticky, reverseNavigation, ...props }: PageHeaderI): JSX.Element;
export interface PageHeaderI {
    title?: string | React.ReactNode;
    children?: string | React.ReactNode;
    action?: string | React.ReactNode;
    sticky?: string | React.ReactNode;
    reverseNavigation?: boolean;
    description?: string | React.ReactNode;
    onClick?: () => void;
}
export default PageHeader;
