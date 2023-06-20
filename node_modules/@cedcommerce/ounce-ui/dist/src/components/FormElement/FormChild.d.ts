import React, { Component } from "react";
import "./FormElement.css";
declare class FormChild extends Component<React.ReactNode | any> {
    constructor(props: React.ReactNode);
    render(): JSX.Element;
}
export default FormChild;
