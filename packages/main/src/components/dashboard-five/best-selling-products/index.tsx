import { FC } from "react";
import { Card, CardHeader, SectionTitle, DataTable } from "@doar/components";
import { TableColumn } from "react-data-table-component";
import { bestSellingProducts } from "@doar/shared/data/dashboard-five";
import { tableStyles } from "./style";
import { useAppSelector } from "../../../redux/hooks";

interface DataRow {
    image: string;
    name: string;
    price: string;
    orders: number;
    stock: number;
    amount: number;
}

const Image = ({ image }: { image: string }) => (
    <img src={image} alt="product" width={50} height={45} />
);

const columns: TableColumn<DataRow>[] = [
    {
        name: "Image",
        selector: (row) => row.image,
        cell: Image,
    },
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Price",
        selector: (row) => row.price,
        sortable: true,
    },
    {
        name: "Orders",
        selector: (row) => row.orders,
        sortable: true,
    },
    {
        name: "Stock",
        selector: (row) => row.stock,
        sortable: true,
    },
    {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
    },
];

const BestSellingProducts: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    return (
        <Card>
            <CardHeader py={["20px", "20px"]}>
                <SectionTitle title="Best Selling Products" />
            </CardHeader>
            <DataTable
                theme={theme}
                columns={columns}
                data={bestSellingProducts}
                customStyles={tableStyles}
                paginationPerPage={7}
                paginationRowsPerPageOptions={[7, 14, 21]}
                pagination
            />
        </Card>
    );
};

export default BestSellingProducts;
