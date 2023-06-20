import React from "react";
import "./PageHeader.css";
declare function PageHeader({ title, action, description, sticky, reverseNavigation, ...props }: PageHeaderI): JSX.Element;
export interface PageHeaderI {
    title?: string | React.ReactNode;
    action?: string | React.ReactNode;
    sticky?: boolean;
    reverseNavigation?: boolean;
    description?: string | React.ReactNode;
    onClick?: () => void;
    metaData?: React.ReactNode;
}
export default PageHeader;
