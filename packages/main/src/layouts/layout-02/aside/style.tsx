import styled, { device, css, themeGet } from "@doar/shared/styled";

interface IProps {
    $minimize: boolean;
    $maximize: boolean;
    $mdMinimize: boolean;
}

interface IVisibleProps {
    $show: boolean;
}

interface IAsideProps extends IProps, IVisibleProps {}

const minimizeCSS = css`
    width: auto;
    & + .content {
        margin-left: 60px;
    }
    .aside-body-inner {
        padding: 20px;
    }
    .aside-user {
        margin-bottom: 5px;
        .avatar {
            width: 26px;
            height: 26px;
            flex-shrink: 0;
            margin-left: -4px;
            &-initial {
                font-size: 10px;
            }
        }
        .aside-alerts {
            opacity: 0;
            visibility: hidden;
            position: fixed;
        }
    }
    .aside-loggedin-user {
        &-data {
            display: none;
        }
        &-nav {
            display: block;
            .nav {
                width: 100%;
                flex-wrap: nowrap;
            }
            svg {
                margin-right: 0;
            }
            span {
                position: fixed;
                opacity: 0;
                visibility: hidden;
                margin-left: 15px;
            }
        }
    }
    .aside-navbar {
        width: 100%;
        flex-wrap: nowrap;
        &-label {
            display: none;
        }
        &-link {
            svg {
                margin-right: 0;
            }
            span {
                position: fixed;
                opacity: 0;
                visibility: hidden;
                margin-left: 15px;
            }
            &:before {
                right: auto;
                left: -20px;
            }
            &:after {
                display: none;
            }
        }
        .submenu {
            position: relative;
            & > li {
                &:first-of-type {
                    margin-top: 10px;
                }
            }
            &:before {
                content: "";
                display: block;
                border-top: 1px solid ${themeGet("colors.border")};
                margin: 8px 0;
            }
        }
    }
`;

const maximizeCSS = css`
    .scrollbar {
        width: 240px;
    }
    .aside {
        &-body {
            width: 100%;
            display: block;
            &-inner {
                padding: 20px;
            }
        }
        &-user {
            .aside-alerts {
                opacity: 1;
                visibility: visible;
                position: relative;
            }
        }
        &-loggedin-user {
            &-nav {
                span {
                    position: relative;
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        &-navbar {
            &-link {
                span {
                    position: relative;
                    opacity: 1;
                    visibility: visible;
                }
                &:after {
                    display: block;
                }
            }
        }
    }
`;

export const StyledAside = styled.aside<IAsideProps>`
    width: 240px;
    height: 100%;
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    .scrollbar {
        .ps__thumb-x {
            display: none;
        }
    }
    ${({ $show }) =>
        $show &&
        css`
            transform: translateX(0);
        `}

    ${({ $minimize }) =>
        $minimize &&
        css`
            ${minimizeCSS}
        `}

    ${({ $mdMinimize, $show }) =>
        $mdMinimize &&
        !$show &&
        css`
            ${device.lgToXl} {
                ${minimizeCSS}
            }
        `}

    ${({ $mdMinimize, $show, $maximize }) =>
        $mdMinimize &&
        !$show &&
        !$maximize &&
        css`
            ${device.lgToXl} {
                .mega-submenu {
                    display: none;
                }
            }
        `}

    ${({ $maximize }) =>
        $maximize &&
        css`
            ${maximizeCSS}
        `}

    ${({ $minimize, $maximize }) =>
        $minimize &&
        !$maximize &&
        css`
            .mega-submenu {
                display: none;
            }
        `}

    ${device.large} {
        transform: translateX(0);
    }
`;

export const StyledBody = styled.div<IAsideProps>`
    height: 100%;
    padding-bottom: 70px;
    transition: all 0.3s;
    border-top: 1px solid ${themeGet("colors.border")};

    ${({ $minimize }) =>
        $minimize &&
        css`
            width: 60px;
            transition: none;
        `}
    ${({ $mdMinimize, $show }) =>
        $mdMinimize &&
        !$show &&
        css`
            ${device.lgToXl} {
                width: 60px;
                transition: none;
            }
        `}
    
    ${(props) =>
        props.theme.name !== "dark" &&
        css`
            background-color: #fff;
            border-right: 1px solid ${themeGet("colors.border")};
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
        `}
`;

export const StyledBodyInner = styled.div`
    padding: 25px;
    position: absolute;
    inset: 0;
`;

export const StyledBackdrop = styled.div<IVisibleProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(28, 39, 60, 0.7);
    opacity: 0;
    z-index: 900;
    visibility: hidden;
    ${({ $show }) =>
        $show &&
        css`
            opacity: 1;
            visibility: visible;
        `}
    ${device.large} {
        display: none;
    }
`;
