import { FC } from "react";
import { Card, CardHeader, SectionTitle, DataTable } from "@doar/components";
import { TableColumn } from "react-data-table-component";
import { recentOrders } from "@doar/shared/data/dashboard-five";
import { tableStyles, StyledCustomer } from "./style";
import { useAppSelector } from "../../../redux/hooks";

interface DataRow {
    orderId: string;
    customerName: string;
    customerImage: string;
    product: string;
    amount: string;
    seller: string;
    status: string;
    rating: number;
}

const CustomerCell = ({
    customerName,
    customerImage,
}: {
    customerName: string;
    customerImage: string;
}) => (
    <StyledCustomer>
        <img src={customerImage} alt={customerName} />
        <h6>{customerName}</h6>
    </StyledCustomer>
);

const columns: TableColumn<DataRow>[] = [
    {
        name: "Order ID",
        selector: (row) => row.orderId,
        sortable: true,
    },
    {
        name: "Customer",
        selector: (row) => row.customerName,
        sortable: true,
        cell: CustomerCell,
    },
    {
        name: "Product",
        selector: (row) => row.product,
        sortable: true,
    },
    {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
    },
    {
        name: "Seller",
        selector: (row) => row.seller,
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
        conditionalCellStyles: [
            {
                when: (row) => row.status === "paid",
                classNames: ["paid"],
            },
            {
                when: (row) => row.status === "pending",
                classNames: ["pending"],
            },
        ],
    },
    {
        name: "Rating",
        selector: (row) => row.rating,
        sortable: true,
        conditionalCellStyles: [
            {
                when: (row) => row.rating === 5,
                style: {
                    color: "#10b759",
                },
            },
            {
                when: (row) => row.rating >= 4 && row.rating < 5,
                style: {
                    color: "#17a2b8",
                },
            },
            {
                when: (row) => row.rating < 4,
                style: {
                    color: "#dc3545",
                },
            },
        ],
    },
];

const RecentOrders: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    return (
        <Card>
            <CardHeader py={["20px", "20px"]}>
                <SectionTitle title="Recent Orders" />
            </CardHeader>
            <DataTable
                theme={theme}
                columns={columns}
                data={recentOrders}
                customStyles={tableStyles}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10]}
                pagination
            />
        </Card>
    );
};

export default RecentOrders;
