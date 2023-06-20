declare function DoughnutCharts({ data, width, height }: DoughnutChartsI): JSX.Element;
export interface DoughnutChartsI {
    data: any;
    width?: number;
    height?: number;
}
export default DoughnutCharts;
