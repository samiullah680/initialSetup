import "./Progress.css";
declare function Progressbar({ percentage, message, progessThickness, animating, }?: ProgressbarI): JSX.Element;
export interface ProgressbarI {
    percentage?: number;
    message?: string;
    progessThickness?: "thin" | "none";
    animating?: boolean;
}
export default Progressbar;
