import styled, { device, css } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    padding-top: 20px;
    padding-bottom: 20px;
    ${device.medium} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledChart = styled.div`
    height: 250px;
    margin-bottom: -33px;
    ${device.medium} {
        height: 300px;
    }
    ${device.large} {
        height: 390px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-legend-text {
                color: rgba(255, 255, 255, 0.4) !important;
            }
        `}
`;
