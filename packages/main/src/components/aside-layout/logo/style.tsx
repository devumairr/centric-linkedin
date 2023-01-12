import styled, { device, themeGet, css } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledLogo = styled(({ ...rest }) => <Anchor {...rest} />)`
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -1px;
    margin-top: -3px;
    color: ${themeGet("colors.gulf")};
    span {
        display: inline-block;
        font-weight: 400;
        color: ${themeGet("colors.primary")};
    }
    ${device.large} {
        font-size: 24px;
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            color: ${themeGet("colors.white")};
        `}
`;
