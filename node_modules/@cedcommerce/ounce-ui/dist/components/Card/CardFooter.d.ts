import { ButtonI } from "../Button/Button";
export interface CardFooterI {
    primaryAction?: ButtonI;
    secondaryAction?: ButtonI;
}
declare function CardFooter(Props: CardFooterI): JSX.Element | null;
export default CardFooter;
