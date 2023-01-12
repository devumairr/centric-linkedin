import styled, {
    device,
    SpaceProps,
    space,
    css,
    themeGet,
} from "@doar/shared/styled";

interface IProps extends SpaceProps {
    $fullHeight?: boolean;
    $align?: "top" | "center" | "bottom";
    $aside?: "minimize";
}

const conentCSS = css<IProps>`
    height: 100vh;
    ${device.large} {
        margin-left: 60px;
    }

    ${({ $aside }) =>
        $aside !== "minimize" &&
        css`
            ${device.xlarge} {
                margin-left: 240px;
            }
        `}
    ${({ $fullHeight }) =>
        $fullHeight &&
        css`
            .content-body {
                min-height: calc(100vh - 60px);
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `}

    ${({ $align }) =>
        $align &&
        $align !== "center" &&
        css`
            .content-body {
                & > .container {
                    flex: 1;
                }
            }
        `}

    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
        `}
    ${space};
`;

export const StyledContent = styled.main`
    ${conentCSS}
`;
