declare function BarChart({ data, options, height, width }: BarChartI): JSX.Element;
export interface BarChartI {
    data?: any;
    options?: any;
    height?: number;
    width?: number;
}
export default BarChart;
