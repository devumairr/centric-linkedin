import { FC } from "react";
import { Card, CardBody, SectionTitle, ApexPieChart } from "@doar/components";
import { marketTrendsChart } from "@doar/shared/data/dashboard-five";
import { StyledHeader, StyledChart } from "./style";
import { useAppSelector } from "../../../redux/hooks";

const MarketTrends: FC = () => {
    const { series, options } = marketTrendsChart;
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = options;
    const darkChartOptions = {
        ...options,
        stroke: {
            colors: ["#141c2b"],
        },
    };
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Market Trends" />
            </StyledHeader>
            <CardBody>
                <StyledChart>
                    <ApexPieChart
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        series={series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default MarketTrends;
