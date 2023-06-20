import "./Progress.css";
declare function ProgressCircle({ percentage, fontsize, enablePercent, size, }?: ProgressCircle1): JSX.Element;
export interface ProgressCircle1 {
    percentage?: number | string;
    size?: number;
    enablePercent?: boolean;
    fontsize?: number;
}
export default ProgressCircle;
