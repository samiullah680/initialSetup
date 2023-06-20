import { ButtonI } from "../Button/Button";
declare type NoDataFoundI = {
    message?: string;
    sub_message?: string;
    actionPrimary?: ButtonI;
    actionSecondary?: ButtonI;
};
declare function NoDataFound({ message, sub_message, actionPrimary, actionSecondary, }: NoDataFoundI): JSX.Element;
export default NoDataFound;
