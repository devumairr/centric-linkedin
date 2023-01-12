import React from "react";
import Layout from "../../../layouts/layout-02";
import Content from "../../../layouts/layout-02/content";
import ContentHeader from "../../../layouts/layout-02/content-header";
import ContentBody from "../../../layouts/layout-02/content-body";
import Wrapper from "../../../containers/apps/mail/wrapper";
import Sidebar from "../../../containers/apps/mail/sidebar";
import Group from "../../../containers/apps/mail/group";
import Main from "../../../containers/apps/mail/main";
import SEO from "../../../components/seo";

const Mail: React.FC = () => {
    return (
        <Layout aside="minimize">
            <SEO />
            <Content aside="minimize">
                <ContentHeader />
                <ContentBody container={false} p={["0px", "0px"]}>
                    <Wrapper layout={2}>
                        <Sidebar />
                        <Group />
                        <Main />
                    </Wrapper>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default Mail;
