import styled, { device, themeGet, css } from "@doar/shared/styled";

interface IProps {
    $layout?: 1 | 2;
}

export const StyledWrapper = styled.div<IProps>`
    background-color: ${themeGet("colors.lilac")};
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    ${device.large} {
        top: 60px;
    }
    ${({ $layout }) =>
        $layout === 1 &&
        css`
            position: fixed;
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            position: fixed;
            ${device.large} {
                position: static;
                height: 100%;
            }
        `}
`;
