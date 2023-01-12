import { FC } from "react";
import { Row, Col } from "@doar/components";
import BestSellingProducts from "../../../components/dashboard-five/best-selling-products";
import TopSellers from "../../../components/dashboard-five/top-sellers";

const RowThree: FC = () => {
    return (
        <Row gutters={10}>
            <Col lg={6} mb={10}>
                <BestSellingProducts />
            </Col>
            <Col lg={6} mb={10}>
                <TopSellers />
            </Col>
        </Row>
    );
};

export default RowThree;
