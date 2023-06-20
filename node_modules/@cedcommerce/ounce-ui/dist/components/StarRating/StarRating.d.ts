declare const StarRating: ({ activeColor, defaultColor, maximum, present, onClick, size, spacing, }: PropsI) => JSX.Element;
export interface PropsI {
    maximum: number;
    present?: number;
    defaultColor?: string;
    activeColor?: string;
    onClick: (present: number) => void;
    size?: number;
    spacing?: "none" | "loose" | "extraLoose" | undefined;
}
export default StarRating;
