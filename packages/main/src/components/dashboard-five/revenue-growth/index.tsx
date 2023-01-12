import { FC, MouseEvent } from "react";
import {
    Card,
    CardBody,
    ApexCharts,
    ApexMixChart,
    SectionTitle,
} from "@doar/components";
import { revenueChart } from "@doar/shared/data/dashboard-five";
import { useAppSelector } from "../../../redux/hooks";
import {
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledBullet,
    StyledListText,
    StyledCardBodyWrap,
    StyledChart,
    StyledFlex,
    StyledItem,
    StyledItemTitle,
    StyledItemSub,
} from "./style";

const RevenueGrowth: FC = () => {
    const { series, options } = revenueChart;
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = options;
    const darkChartOptions = {
        ...options,
        grid: { ...options.grid, borderColor: "rgba(255,255,255,.05)" },
        colors: [options.colors[0], options.colors[1], "#b4bdce"],
    };
    const chartToggle = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.classList.toggle("hidden");
        ApexCharts.exec(options.chart.id, "toggleSeries", target.value);
    };

    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Account &amp; Monthly Recurring Revenue Growth" />
                <StyledList>
                    {series.map((sr, i) => (
                        <StyledListItem
                            key={sr.name}
                            value={sr.name}
                            onClick={chartToggle}
                        >
                            <StyledBullet bg={options.colors[i]} />
                            <StyledListText>{sr.name}</StyledListText>
                        </StyledListItem>
                    ))}
                </StyledList>
            </StyledHeader>
            <CardBody p={["0px", "0px"]} position="relative">
                <StyledCardBodyWrap>
                    <StyledFlex>
                        <StyledItem>
                            <StyledItemTitle>Total Sale</StyledItemTitle>
                            <StyledItemSub>$5000,000</StyledItemSub>
                        </StyledItem>
                        <StyledItem>
                            <StyledItemTitle>Total Order</StyledItemTitle>
                            <StyledItemSub>300,000</StyledItemSub>
                        </StyledItem>
                        <StyledItem>
                            <StyledItemTitle>Total View</StyledItemTitle>
                            <StyledItemSub>10000,000</StyledItemSub>
                        </StyledItem>
                        <StyledItem>
                            <StyledItemTitle>Total Support</StyledItemTitle>
                            <StyledItemSub>100,000</StyledItemSub>
                        </StyledItem>
                    </StyledFlex>
                </StyledCardBodyWrap>
                <StyledChart>
                    <ApexMixChart
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        series={series}
                        width="100%"
                        height="300"
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default RevenueGrowth;
