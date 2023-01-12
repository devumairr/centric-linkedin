import React from "react";
import { Avatar, AvatarInitial } from "@doar/components";
import Alerts from "./alerts";
import LoggedinUser from "./loggedin-user";
import { StyledUser, StyledAvatarWrap } from "./style";

const AsideUser: React.FC = () => {
    return (
        <StyledUser className="aside-user">
            <StyledAvatarWrap>
                <Avatar size="md">
                    <AvatarInitial>T</AvatarInitial>
                </Avatar>
                <Alerts />
            </StyledAvatarWrap>
            <LoggedinUser />
        </StyledUser>
    );
};

export default AsideUser;
