import { FC } from "react";
import { Row, Col } from "@doar/components";
import { conversions } from "@doar/shared/data/dashboard-five";
import Conversion from "../../../components/dashboard-five/conversion";

const RowOne: FC = () => {
    return (
        <Row gutters={10}>
            {conversions.map((data) => (
                <Col sm={6} lg={3} mb={10} key={data.id}>
                    <Conversion
                        title={data.title}
                        rate={data.rate}
                        change={data.change}
                        icon={data.icon}
                        color={data.color}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default RowOne;
