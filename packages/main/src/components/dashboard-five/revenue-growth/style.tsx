import styled, {
    device,
    themeGet,
    color,
    ColorProps,
    css,
} from "@doar/shared/styled";
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

export const StyledList = styled.div`
    padding-left: 0;
    list-style: none;
    display: flex;
    margin-bottom: 0px;
    margin-top: 20px;
    ${device.small} {
        margin-top: 10px;
    }
    ${device.medium} {
        margin-top: 0px;
    }
`;

export const StyledListItem = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0;
    background: transparent;
    border: none;
    &.hidden {
        text-decoration: line-through;
    }
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
    &:not(:first-child) {
        margin-left: 5px;
    }
`;

export const StyledBullet = styled.span<ColorProps>`
    display: block;
    border-radius: 0.25rem;
    height: 10px;
    margin-right: 5px;
    width: 10px;
    ${color};
`;

export const StyledListText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
`;

export const StyledCardBodyWrap = styled.div`
    padding-left: 20px;
    padding-top: 20px;
`;

export const StyledChart = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0 10px 0;
    .apexcharts-xaxis-label {
        text-transform: uppercase;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-xaxis-label {
                fill: rgba(255, 255, 255, 0.4);
            }
            .apexcharts-yaxis-label {
                fill: rgba(255, 255, 255, 0.4);
            }
        `}
`;

export const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-block-end: 1px solid ${themeGet("colors.border")};
    margin-inline-start: -20px;
    margin-block-start: -20px;
`;

export const StyledItem = styled.div`
    max-width: 25%;
    flex-basis: 25%;
    text-align: center;
    padding-block-start: 20px;
    padding-block-end: 20px;
    &:not(:last-of-type) {
        border-inline-end: 1px solid ${themeGet("colors.border")};
    }
`;

export const StyledItemTitle = styled.h3`
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    color: ${themeGet("colors.text3")};
    font-weight: 500;
    font-size: 12px;
    ${device.medium} {
        font-size: 14px;
    }
`;

export const StyledItemSub = styled.h5`
    font-family: ${themeGet("fonts.interUi")};
    color: ${themeGet("colors.text2")};
    font-size: 10px;
    margin-bottom: 0;
    ${device.medium} {
        font-size: 13px;
    }
`;
