/* eslint-disable @typescript-eslint/no-explicit-any */
import { TTheme } from "@doar/shared/types";
import { FC } from "react";
import ReactDataTable, {
    TableColumn,
    createTheme,
} from "react-data-table-component";

createTheme(
    "solarized",
    {
        text: {
            primary: "#1b2e4b",
        },
        background: {
            default: "transparent",
        },
        divider: {
            default: "#485e9029",
        },
    },
    "dark"
);

createTheme(
    "solarizedDark",
    {
        text: {
            primary: "#ffffff",
        },
        background: {
            default: "transparent",
        },
        divider: {
            default: "#485e9029",
        },
    },
    "dark"
);

interface IProps {
    data: any[];
    columns: TableColumn<any>[];
    theme?: TTheme;
    pagination?: boolean;
    paginationPerPage?: number;
    paginationRowsPerPageOptions?: number[];
    customStyles: {
        [x: string]: any;
    };
}

const DataTable: FC<IProps> = ({
    data,
    columns,
    theme,
    customStyles,
    pagination,
    paginationPerPage,
    paginationRowsPerPageOptions,
}) => {
    return (
        <ReactDataTable
            theme={theme === "dark" ? "solarizedDark" : "solarized"}
            columns={columns}
            data={data}
            customStyles={customStyles}
            paginationPerPage={paginationPerPage}
            paginationRowsPerPageOptions={paginationRowsPerPageOptions}
            pagination={pagination}
        />
    );
};

export default DataTable;
