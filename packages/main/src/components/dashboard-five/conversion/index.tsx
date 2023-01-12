import { FC } from "react";
import { Card, CardBody, Progress } from "@doar/components";
import { IEcomConversion } from "@doar/shared/types";
import {
    StyledCardTop,
    StyledCardTitle,
    StyledCardRate,
    StyledChangePercent,
    StyledIcon,
    StyledBottom,
} from "./style";

type IProps = Omit<IEcomConversion, "id">;

const Conversion: FC<IProps> = ({ title, rate, change, icon, color }) => {
    return (
        <Card>
            <CardBody>
                <StyledCardTop>
                    <StyledCardRate>{rate}</StyledCardRate>
                    <StyledChangePercent $growth={change.growth}>
                        {change?.percentage}{" "}
                        {change?.growth === "up" && (
                            <i className="fa fa-arrow-up" />
                        )}
                        {change?.growth === "down" && (
                            <i className="fa fa-arrow-down" />
                        )}{" "}
                    </StyledChangePercent>
                </StyledCardTop>
                <Progress now={70} height="5px" mb="15px" />
                <StyledBottom>
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <StyledIcon $bg={color}>
                        <i className={icon} />
                    </StyledIcon>
                </StyledBottom>
            </CardBody>
        </Card>
    );
};

export default Conversion;
