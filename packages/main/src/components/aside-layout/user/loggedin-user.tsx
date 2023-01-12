import React, { useState } from "react";
import {
    ChevronDown,
    Edit,
    User,
    Settings,
    HelpCircle,
    LogOut,
} from "react-feather";
import { Heading, Text, Nav, NavLink } from "@doar/components";
import {
    StyledLoggedInUser,
    StyledUserBtn,
    StyledUserCollapse,
    StyledUserData,
} from "./style";

const LoggedinUser: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <StyledLoggedInUser className="aside-loggedin-user">
            <StyledUserData className="aside-loggedin-user-data">
                <StyledUserBtn
                    type="button"
                    onClick={() => setShow((prev) => !prev)}
                >
                    <Heading fontWeight={600} mb="0px">
                        Katherine Pechon
                    </Heading>
                    <ChevronDown size={16} strokeWidth="2.3px" />
                </StyledUserBtn>
                <Text color="text3" fontSize="12px">
                    Administrator
                </Text>
            </StyledUserData>

            <StyledUserCollapse
                className="aside-loggedin-user-nav"
                $show={show}
            >
                <Nav vertical customStyle="aside">
                    <NavLink path="#!">
                        <Edit /> <span>Edit Profile</span>
                    </NavLink>
                    <NavLink path="#!">
                        <User /> <span>View Profile</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Settings /> <span>Account Settings</span>
                    </NavLink>
                    <NavLink path="#!">
                        <HelpCircle /> <span>Help Center</span>
                    </NavLink>
                    <NavLink path="#!">
                        <LogOut /> <span>Sign Out</span>
                    </NavLink>
                </Nav>
            </StyledUserCollapse>
        </StyledLoggedInUser>
    );
};

export default LoggedinUser;
