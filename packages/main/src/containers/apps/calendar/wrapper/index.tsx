import { FC } from "react";
import { StyledWrap } from "./style";

interface IProps {
    layout?: 1 | 2;
}

const Wrapper: FC<IProps> = ({ children, layout }) => {
    return (
        <StyledWrap $layout={layout} className="wrapper">
            {children}
        </StyledWrap>
    );
};

Wrapper.defaultProps = {
    layout: 1,
};

export default Wrapper;
