declare const StarRatingBox: ({ defaultColor, present, onClick, size, spacing, }: StarRatingI) => JSX.Element;
export interface StarRatingI {
    defaultColor?: string;
    present?: number;
    onClick?: (present: number) => void;
    size?: number;
    spacing?: "none" | "loose" | "extraLoose";
}
export default StarRatingBox;
