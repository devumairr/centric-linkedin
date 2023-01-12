import React from "react";
import { SpaceProps } from "@doar/shared/styled";
import cn from "classnames";
import { StyledContent } from "./style";

interface IProps extends SpaceProps {
    className?: string;
    fullHeight?: boolean;
    align?: "top" | "center" | "bottom";
    aside?: "minimize";
}

const Content: React.FC<IProps> = ({
    children,
    className,
    fullHeight,
    align,
    aside,
    ...restProps
}) => {
    return (
        <StyledContent
            $fullHeight={fullHeight}
            $align={align}
            $aside={aside}
            className={cn(className, "content")}
            {...restProps}
        >
            {children}
        </StyledContent>
    );
};

export default Content;
