import { IEcomConversion } from "../../types";

const conversions: IEcomConversion[] = [
    {
        id: 1,
        title: "Total Visitor",
        rate: "10,056",
        change: {
            percentage: "1.2%",
            growth: "up",
        },
        icon: "fa fa-user",
        color: "#0168fa",
    },
    {
        id: 2,
        title: "Product Sold",
        rate: "3,137",
        change: {
            percentage: "0.7%",
            growth: "down",
        },
        icon: "fa fa-shopping-cart",
        color: "#10b759",
    },
    {
        id: 3,
        title: "Order Received",
        rate: "5,000",
        change: {
            percentage: "0.3%",
            growth: "down",
        },
        icon: "fa fa-shopping-bag",
        color: "#00b8d4",
    },
    {
        id: 4,
        title: "Total Revenue",
        rate: "$1,650",
        change: {
            percentage: "2.1%",
            growth: "up",
        },
        icon: "fa fa-dollar-sign",
        color: "#00cccc",
    },
];

export default conversions;
