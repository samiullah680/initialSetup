import { ButtonI } from "../Button/Button";
declare type SessionExpireI = {
    message?: string;
    sub_message?: string;
    actionPrimary?: ButtonI;
    actionSecondary?: ButtonI;
};
declare function SessionExpire({ message, sub_message, actionSecondary, }: SessionExpireI): JSX.Element;
export default SessionExpire;
