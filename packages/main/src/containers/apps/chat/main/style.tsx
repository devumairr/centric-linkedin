import styled, { device, css, themeGet, tinycolor } from "@doar/shared/styled";

interface IMainProps {
    $sidebar?: boolean;
    $layout?: 1 | 2;
}

export const StyledMain = styled.div<IMainProps>`
    position: absolute;
    inset: 0;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100vw);
    transition: all 0.3s;
    ${({ $layout }) =>
        $layout === 1 &&
        css`
            ${device.small} {
                transform: translateX(310px);
            }
            ${device.large} {
                left: 310px;
            }
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            ${device.small} {
                transform: translateX(304px);
            }
            ${device.large} {
                left: 304px;
            }
        `}

    ${device.large} {
        opacity: 1;
        transform: none;
        visibility: visible;
    }
    ${({ $sidebar }) =>
        $sidebar &&
        css`
            @media (max-width: 991.98px) {
                opacity: 1;
                visibility: visible;
                transform: translateX(0);
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken5")};
        `}
`;

export const StyledHeader = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid ${themeGet("colors.border")};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px 10px 20px;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken3")};
        `}
`;

export const StyledHeaderRight = styled.div`
    display: flex;
`;

export const StyledBody = styled.div<{ $showSidebar?: boolean }>`
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 60px;
    ${({ $showSidebar }) =>
        !!$showSidebar &&
        css`
            ${device.medium} {
                margin-right: 230px;
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
            .avatar:after {
                box-shadow: 0 0 0 2px ${themeGet("colors.gray900")};
            }
        `}
`;

export const StyledBodyInner = styled.div`
    width: 100%;
    height: 100%;
`;

export const StyledFooter = styled.div`
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid ${themeGet("colors.border")};
    height: 60px;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(3)
                .toString()};
        `}
`;

export const StyledSidebar = styled.div<{ $showSidebar?: boolean }>`
    background-color: #fff;
    width: 230px;
    position: absolute;
    top: 60px;
    bottom: 60px;
    right: 0;
    display: none;
    border-left: 1px solid ${themeGet("colors.border")};
    ${({ $showSidebar }) =>
        !!$showSidebar &&
        css`
            display: block;
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(3)
                .toString()};
            .avatar:after {
                box-shadow: 0 0 0 2px ${themeGet("colors.gray900")};
            }
        `}
`;
