import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { Printer, Mail, CreditCard } from "react-feather";
import { Heading, Text, Button } from "@doar/components";
import { StyledWrap, StyledBtnWrap } from "./style";

interface IProps extends SpaceProps {
    /**
     * Put Extra classes
     */
    className?: string;
}

const PageHeader: FC<IProps> = ({ className, ...rest }) => {
    return (
        <StyledWrap className={className} {...rest}>
            <div>
                <Heading as="h4" mb="5px">
                    Invoice #DF032AZ00022
                </Heading>
                <Text color="text3">Due on April 21, 2019</Text>
            </div>
            <StyledBtnWrap>
                <Button color="white" iconSize="sm" hasIcon>
                    <Printer /> Print
                </Button>
                <Button color="white" iconSize="sm" hasIcon ml="10px">
                    <Mail /> Email
                </Button>
                <Button iconSize="sm" hasIcon ml="10px">
                    <CreditCard /> Pay
                </Button>
            </StyledBtnWrap>
        </StyledWrap>
    );
};

export default PageHeader;
