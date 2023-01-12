import styled, { device, css } from "@doar/shared/styled";

interface IProps {
    $layout?: 1 | 2;
}

export const StyledWrap = styled.div<IProps>`
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
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
                position: relative;
                height: 100%;
                top: auto;
            }
        `}
`;
