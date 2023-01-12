import { FC } from "react";
import { StyledWrapper } from "./style";

interface IProps {
    layout?: 1 | 2;
}

const Wrapper: FC<IProps> = ({ children, layout }) => {
    return (
        <StyledWrapper $layout={layout} className="wrapper">
            {children}
        </StyledWrapper>
    );
};

Wrapper.defaultProps = {
    layout: 1,
};

export default Wrapper;
