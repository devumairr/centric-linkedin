import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import Breadcrumb from "../breadcrumb";
import SearchForm from "../search-form";
import { StyledWrap } from "./style";

interface IProps extends SpaceProps {
    /**
     * Pass previous page's text and link
     */
    prev: Array<{
        text: string;
        link: string;
    }>;
    /**
     * Write page's title
     */
    title: string;
    /**
     * Write page's welcome text
     */
    wcText?: string;
    /**
     * Put Extra classes
     */
    className?: string;
}

const PageHeader: FC<IProps> = ({
    prev,
    title,
    wcText,
    className,
    ...rest
}) => {
    return (
        <StyledWrap className={className} {...rest}>
            <div>
                <Breadcrumb prev={prev} title={title} wcText={wcText} />
            </div>
            <SearchForm />
        </StyledWrap>
    );
};

export default PageHeader;
