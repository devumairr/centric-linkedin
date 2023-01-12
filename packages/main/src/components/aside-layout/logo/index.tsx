import { FC } from "react";
import { StyledLogo } from "./style";

const AsideLogo: FC = () => {
    return (
        <StyledLogo className="aside-logo" path="/">
            do<span>ar</span>
        </StyledLogo>
    );
};

export default AsideLogo;
