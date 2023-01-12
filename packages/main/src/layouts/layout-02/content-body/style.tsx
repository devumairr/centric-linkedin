import styled, { device, space } from "@doar/shared/styled";

export const StyledBody = styled.div`
    position: relative;
    padding: 15px;
    /* height: calc(100% - 54px); */
    height: 100%;
    overflow-y: auto;
    ${device.small} {
        padding: 20px;
    }
    ${device.large} {
        padding: 25px;
        /* height: calc(100% - 60px); */
    }
    ${space}
`;
