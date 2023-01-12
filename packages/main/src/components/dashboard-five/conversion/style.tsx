import styled, { themeGet, css, device } from "@doar/shared/styled";
import { hexTorgb } from "@doar/shared/methods";

export const StyledCardTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${device.large} {
        display: block;
    }
    ${device.xlarge} {
        display: flex;
    }
`;

export const StyledCardTitle = styled.h6`
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 0;
`;

export const StyledCardRate = styled.h3`
    line-height: 1.1;
    margin-right: 5px;
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
`;

export const StyledChangePercent = styled.span<{ $growth: string }>`
    font-weight: 500;
    ${({ $growth }) =>
        $growth === "up" &&
        css`
            color: ${themeGet("colors.success")};
        `}

    ${({ $growth }) =>
        $growth === "down" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;

export const StyledBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

export const StyledIcon = styled.span<{ $bg: string }>`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 5px;
    margin-left: auto;
    background: ${({ $bg }) => hexTorgb($bg, 0.3)};
    color: ${({ $bg }) => $bg};
`;
