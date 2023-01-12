import styled, { device, css } from "@doar/shared/styled";

interface IProps {
    $showSidebar: boolean;
    $showBody: boolean;
    $layout?: 1 | 2;
}

export const StyledWrapper = styled.div<IProps>`
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(-100vw);
    transition: all 0.3s;
    @media (min-width: 375px) {
        transform: translateX(-220px);
    }
    ${device.medium} {
        transform: translateX(0) !important;
    }
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
    ${({ $showSidebar }) =>
        $showSidebar &&
        css`
            transform: translateX(0) !important;
        `}
    ${({ $showBody }) =>
        $showBody &&
        css`
            @media (max-width: 1199.98px) {
                transform: translateX(-200vw) !important;
            }
        `}
`;
