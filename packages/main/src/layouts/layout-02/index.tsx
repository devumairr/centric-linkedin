import React from "react";
import { Outlet } from "react-router-dom";
import Aisde from "./aside";
import Content from "./content";
import ContentHeader from "./content-header";
import ContentBody from "./content-body";

interface IProps {
    aside?: "minimize";
    sidebarLayout?: 1 | 2;
}

const Layout: React.FC<IProps> = ({ aside, sidebarLayout }) => {
    return (
        <>
            <Aisde layout={aside} sidebarLayout={sidebarLayout} />
            {/* {children} */}
            <Content>
                <ContentBody>
                    <ContentHeader />
                    <Outlet />
                </ContentBody>
            </Content>
        </>
    );
};

Layout.defaultProps = {
    sidebarLayout: 1,
};

export default Layout;
