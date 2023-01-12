import styled, { css, themeGet } from "@doar/shared/styled";

interface INavProps {
    $sidebar?: boolean;
    $layout?: 1 | 2;
}

export const StyledSidebar = styled.div<INavProps>`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transition: all 0.3s;
    ${({ $layout }) =>
        $layout === 1 &&
        css`
            left: 60px;
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            left: 54px;
        `}
    @media (min-width: 480px) {
        width: 250px;
        border-right: 1px solid ${themeGet("colors.border")};
    }
    ${({ $sidebar }) =>
        $sidebar &&
        css`
            @media (max-width: 991px) {
                transform: translateX(-100vw);
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken5")};
        `}
`;

export const StyledHeader = styled.div`
    border-bottom: 1px solid ${themeGet("colors.border")};
    height: 60px;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken3")};
        `}
`;
export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border-top: 1px solid ${themeGet("colors.border")};
    padding-left: 20px;
    padding-right: 15px;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken3")};
        `}
`;
