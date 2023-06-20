declare function PieCharts({ data, width, height }: PieChartsI): JSX.Element;
export interface PieChartsI {
    data: any;
    width?: number;
    height?: number;
}
export default PieCharts;
