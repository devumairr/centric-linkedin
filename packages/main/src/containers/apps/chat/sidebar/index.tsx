import { FC } from "react";
import { StyledSidebar, StyledHeader, StyledBody, StyledFooter } from "./style";
import Scrollbar from "../../../../components/scrollbar";
import SidebarHeader from "../../../../components/apps/chat/sidebar-header";
import SidebarChannels from "../../../../components/apps/chat/sidebar-channels";
import SidebarMessages from "../../../../components/apps/chat/sidebar-messages";
import SidebarFooter from "../../../../components/apps/chat/sidebar-footer";
import { useAppSelector } from "../../../../redux/hooks";

interface IProps {
    layout?: 1 | 2;
}

const Sidebar: FC<IProps> = ({ layout }) => {
    const { sidebar } = useAppSelector((state) => state.ui);
    return (
        <StyledSidebar className="sidebar" $layout={layout} $sidebar={sidebar}>
            <StyledHeader>
                <SidebarHeader />
            </StyledHeader>
            <Scrollbar bottom="60px">
                <StyledBody>
                    <SidebarChannels />
                    <SidebarMessages />
                </StyledBody>
            </Scrollbar>
            <StyledFooter>
                <SidebarFooter />
            </StyledFooter>
        </StyledSidebar>
    );
};

Sidebar.defaultProps = {
    layout: 1,
};

export default Sidebar;
