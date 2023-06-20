import React, { Component } from "react";
import { ButtonI } from "../Button/Button";
import { cardHelpI } from "./CardHelp";
declare class BodyHeader extends Component<BodyHeaderI> {
    checkForTitle: (props: BodyHeaderI) => React.ReactNode;
    checkForSubTitle: (props: BodyHeaderI) => React.ReactNode;
    checkForSubTitleSmall: (props: BodyHeaderI) => React.ReactNode;
    static defaultProps: {
        __TYPE: string;
    };
    render(): React.ReactNode;
}
interface ExtraButton extends ButtonI {
    content?: string;
}
export interface BodyHeaderI extends cardHelpI {
    title: string;
    subTitle?: string;
    action?: ExtraButton;
    subTitleSmall?: string;
    __type?: string;
}
export interface objI {
    [content: string]: React.ReactNode | string;
}
export default BodyHeader;
