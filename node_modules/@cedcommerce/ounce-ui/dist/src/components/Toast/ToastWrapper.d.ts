import React, { Component } from "react";
import "./Toast.css";
interface ToastWrapperI {
    children: React.ReactNode;
}
declare class ToastWrapper extends Component<ToastWrapperI> {
    constructor(props: ToastWrapperI);
    render(): JSX.Element;
}
export default ToastWrapper;
