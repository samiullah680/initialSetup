import React, { Component } from "react";
declare class Table extends Component<TableI, TableI> {
    constructor(props: TableI);
    validateColumns: (columns: Obj2) => any;
    static getDerivedStateFromProps(props: TableI): ObjI | any;
    renderHeader: (columns: Obj2) => JSX.Element;
    renderBody: (rows: ObjI[], columns: Obj2) => JSX.Element[];
    render(): JSX.Element;
}
export interface TableI {
    columns: Obj2;
    rows: ObjI[];
}
interface Obj2 {
    [name: string]: ObjI;
}
interface ObjI {
    [name: string]: React.ReactNode | string | number | boolean;
}
export default Table;
