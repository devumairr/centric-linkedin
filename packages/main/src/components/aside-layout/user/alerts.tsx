import React from "react";
import ReactTooltip from "react-tooltip";
import { MessageSquare, Bell, LogOut } from "react-feather";
import { StyledAlerts, StyledAlert } from "./style";

const Alerts: React.FC = () => {
    return (
        <StyledAlerts className="aside-alerts">
            <ReactTooltip place="top" effect="solid" id="tooltip-message" />
            <StyledAlert
                path="#!"
                className="new"
                data-for="tooltip-message"
                data-tip="You have 2 unread messages"
            >
                <MessageSquare size={16} strokeWidth="2.3px" />
            </StyledAlert>

            <ReactTooltip
                place="top"
                effect="solid"
                id="tooltip-notification"
            />
            <StyledAlert
                path="#!"
                className="new"
                data-for="tooltip-notification"
                data-tip="You have 4 new notifications"
            >
                <Bell size={16} strokeWidth="2.3px" />
            </StyledAlert>

            <ReactTooltip place="top" effect="solid" id="tooltip-sign-out" />
            <StyledAlert
                path="#!"
                data-for="tooltip-sign-out"
                data-tip="Sign out"
            >
                <LogOut size={16} strokeWidth="2.3px" />
            </StyledAlert>
        </StyledAlerts>
    );
};

export default Alerts;
