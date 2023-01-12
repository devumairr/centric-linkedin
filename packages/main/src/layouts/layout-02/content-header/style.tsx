/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { device, themeGet, tinycolor, css } from "@doar/shared/styled";

export const StyledHeader = styled.div`
    background-color: #fff;
    height: 55px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${themeGet("colors.border")};
    padding-left: 65px;
    ${device.large} {
        height: 60px;
        padding: 0 25px;
    }
    .nav {
        &-link {
            &:not(:first-of-type) {
                margin-left: 10px;
            }
            line-height: 1;
            padding: 0;
            color: ${(props) =>
                tinycolor(props.theme.colors.text2).setAlpha(0.75).toString()};
            svg {
                width: 18px;
                height: 18px;
                ${device.large} {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
    ${(props) =>
        props.theme.name !== "dark" &&
        css`
            background-color: #fff;
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
        `}
`;
