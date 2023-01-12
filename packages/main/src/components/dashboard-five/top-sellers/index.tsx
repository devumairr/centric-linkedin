import { FC } from "react";
import { Card, CardHeader, SectionTitle, DataTable } from "@doar/components";
import { TableColumn } from "react-data-table-component";
import { topSellers } from "@doar/shared/data/dashboard-five";
import { tableStyles } from "./style";
import { useAppSelector } from "../../../redux/hooks";

interface DataRow {
    name: string;
    detail: string;
    payment: string;
    revenue: string;
    growth: string;
    status: string;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Details",
        selector: (row) => row.detail,
        sortable: true,
    },
    {
        name: "Payment",
        selector: (row) => row.payment,
        sortable: true,
    },
    {
        name: "Revenue",
        selector: (row) => row.revenue,
        sortable: true,
    },
    {
        name: "Growth",
        selector: (row) => row.growth,
        sortable: true,
        conditionalCellStyles: [
            {
                when: (row) => row.status === "up",
                style: {
                    color: "#10b759",
                },
            },
            {
                when: (row) => row.status === "down",
                style: {
                    color: "#dc3545",
                },
            },
        ],
    },
];

const BestSellingProducts: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    return (
        <Card>
            <CardHeader py={["20px", "20px"]}>
                <SectionTitle title="Top Sellers" />
            </CardHeader>
            <DataTable
                theme={theme}
                columns={columns}
                data={topSellers}
                customStyles={tableStyles}
                paginationPerPage={7}
                paginationRowsPerPageOptions={[7, 14, 21]}
                pagination
            />
        </Card>
    );
};

export default BestSellingProducts;
