import React from "react";
import Layout from "../../../layouts/layout-02";
import Content from "../../../layouts/layout-02/content";
import ContentHeader from "../../../layouts/layout-02/content-header";
import ContentBody from "../../../layouts/layout-02/content-body";
import Wrapper from "../../../containers/apps/calendar/wrapper";
import Sidebar from "../../../containers/apps/calendar/sidebar";
import Main from "../../../containers/apps/calendar/main";
import SEO from "../../../components/seo";

const Calendar: React.FC = () => {
    return (
        <Layout aside="minimize">
            <SEO />
            <Content aside="minimize">
                <ContentHeader />
                <ContentBody container={false} p={["0px", "0px"]}>
                    <Wrapper layout={2}>
                        <Sidebar />
                        <Main />
                    </Wrapper>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default Calendar;
