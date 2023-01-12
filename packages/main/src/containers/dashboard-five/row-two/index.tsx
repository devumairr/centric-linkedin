import { FC } from "react";
import { Row, Col } from "@doar/components";
import RevenueGrowth from "../../../components/dashboard-five/revenue-growth";
import MarketTrends from "../../../components/dashboard-five/market-trends";

const RowTwo: FC = () => {
    return (
        <Row gutters={10}>
            <Col lg={8} mb={10}>
                <RevenueGrowth />
            </Col>
            <Col lg={4} mb={10}>
                <MarketTrends />
            </Col>
        </Row>
    );
};

export default RowTwo;
