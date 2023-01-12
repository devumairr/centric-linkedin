import React from "react";
import { HelpCircle, Grid, AlignLeft } from "react-feather";
import { Nav, NavLink } from "@doar/components";
import ContentSearch from "../../../components/aside-layout/content-search";
import { StyledHeader } from "./style";

const ContentHeader: React.FC = () => {
    return (
        <StyledHeader>
            <ContentSearch />
            <Nav>
                <NavLink path="#!">
                    <HelpCircle />
                </NavLink>
                <NavLink path="#!">
                    <Grid />
                </NavLink>
                <NavLink path="#!">
                    <AlignLeft />
                </NavLink>
            </Nav>
        </StyledHeader>
    );
};

export default ContentHeader;
