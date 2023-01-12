import { FC } from "react";
import { Card, CardBody, VectorMap, SectionTitle } from "@doar/components";
import worldLowRes from "@doar/shared/data/maps/world-low-res.json";
import { salesRevenues } from "@doar/shared/data/dashboard-one";
import { flatDeep } from "@doar/shared/methods";
import {
    StyledHeader,
    StyeldMap,
    StyledTable,
    StyledTH,
    StyledTD,
} from "./style";

const SalesRevenue: FC = () => {
    const keys = [
        ...new Set(flatDeep(salesRevenues.map((sale) => Object.keys(sale)))),
    ];

    return (
        <Card height={[null, null, null, "100%"]}>
            <StyledHeader>
                <SectionTitle title="Sales Revenue" />
            </StyledHeader>
            <CardBody p={["0px", "0px"]}>
                <StyeldMap>
                    <VectorMap
                        data={worldLowRes}
                        height="200px"
                        width="100%"
                        color="#d1e6fa"
                        selectedColor="#69b2f8"
                        backgroundColor="transparent"
                        checkedLayers={["us", "ru", "in"]}
                        tooltip
                    />
                </StyeldMap>
                <StyledTable borderless>
                    <thead>
                        <tr>
                            {keys.map((key) => (
                                <StyledTH key={key}>{key}s</StyledTH>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {salesRevenues.map((rev) => (
                            <tr key={rev.state}>
                                <StyledTD>{rev.state}</StyledTD>
                                <StyledTD>{rev.order}</StyledTD>
                                <StyledTD>{rev.earning}</StyledTD>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </CardBody>
        </Card>
    );
};

export default SalesRevenue;
