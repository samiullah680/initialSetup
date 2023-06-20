import React from "react";
import "./MainLayout.css";
declare const MainLayout: (props: MainLayoutI) => JSX.Element;
export interface MainLayoutI {
    children: React.ReactNode[];
}
export default MainLayout;
