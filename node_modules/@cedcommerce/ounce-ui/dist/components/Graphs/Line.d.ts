declare function LineCharts({ data, width, height, options }: PieChartsI): JSX.Element;
export interface PieChartsI {
    data: any;
    options: any;
    width?: number;
    height?: number;
    left?: string;
}
export default LineCharts;
