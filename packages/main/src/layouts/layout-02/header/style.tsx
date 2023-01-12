import styled, { device, themeGet, css, tinycolor } from "@doar/shared/styled";

interface IProps {
    $minimize: boolean;
    $mdMinimize: boolean;
    $show: boolean;
}

const minimizeCSS = css`
    width: 60px;
    justify-content: center;
    .aside-logo {
        display: none;
    }
`;

export const StyledHeader = styled.header<IProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 18px;
    transform: translateX(54px);

    ${device.large} {
        padding: 0 20px;
        transform: none;
        height: 59px;
    }
    ${(props) =>
        props.theme.name !== "dark" &&
        css`
            border-right: 1px solid ${themeGet("colors.border")};
            background-color: #fff;
        `}
    ${({ $show }) =>
        $show &&
        css`
            transform: none;
            border-right-color: transparent;
            .display-btn {
                svg {
                    &:first-of-type {
                        display: none !important;
                    }
                    &:last-of-type {
                        display: block !important;
                    }
                }
            }
        `}
    ${({ $minimize }) =>
        $minimize &&
        css`
            ${minimizeCSS}
            ${device.large} {
                padding: 0;
            }
        `}
    
    ${({ $mdMinimize, $show }) =>
        $mdMinimize &&
        !$show &&
        css`
            ${device.lgToXl} {
                padding: 0;
                ${minimizeCSS}
            }
        `}
    ${({ $mdMinimize, $show }) =>
        $mdMinimize &&
        $show &&
        css`
            ${device.lgToXl} {
                border-right-color: ${themeGet("colors.border")};
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
            border-right: 1px solid
                ${tinycolor(themeGet("colors.white")(props))
                    .setAlpha(0.06)
                    .toRgbString()};
        `}
`;

export const StyledMenuBtn = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    line-height: 0.5;
    svg {
        color: ${themeGet("colors.text3")};
        margin-top: -3px;
    }
    &:hover,
    &:focus {
        svg {
            color: ${themeGet("colors.text2")};
        }
    }
    &.minimize-btn {
        display: none;
        ${device.xlarge} {
            display: block;
        }
    }
    &.display-btn {
        display: block;
        ${device.xlarge} {
            display: none;
        }
        svg {
            &:last-of-type {
                margin-top: 0;
                display: none;
            }
        }
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            &:hover {
                color: ${themeGet("colors.white")};
            }
        `}
`;

interface IMenuBtn {
    $hasSidebar?: boolean;
    $sidebarOpen?: boolean;
    $bodyOpen?: boolean;
}

export const StyledSidebarBtn = styled.button<IMenuBtn>`
    padding: 0;
    background-color: transparent;
    border: none;
    line-height: 0.5;
    svg {
        color: ${themeGet("colors.text3")};
    }
    ${device.small} {
        margin-left: 20px;
    }
    ${device.large} {
        display: none;
    }

    ${({ $sidebarOpen, $bodyOpen }) =>
        $sidebarOpen &&
        !$bodyOpen &&
        css`
            display: none;
        `}
    ${({ $bodyOpen, $sidebarOpen }) =>
        $bodyOpen &&
        $sidebarOpen &&
        css`
            display: block;
        `}
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            &:hover {
                color: ${themeGet("colors.white")};
            }
        `}
`;
