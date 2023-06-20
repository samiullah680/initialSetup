import { ButtonI } from "../Button/Button";
declare type PageNotFoundI = {
    message?: string;
    sub_message?: string;
    action?: ButtonI;
};
declare function PageNotFound({ message, sub_message, action }: PageNotFoundI): JSX.Element;
export default PageNotFound;
