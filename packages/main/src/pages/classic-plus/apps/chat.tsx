import { FC } from "react";
import Layout from "../../../layouts/layout-02";
import Content from "../../../layouts/layout-02/content";
import ContentHeader from "../../../layouts/layout-02/content-header";
import ContentBody from "../../../layouts/layout-02/content-body";
import Wrapper from "../../../containers/apps/chat/wrapper";
import NavLeft from "../../../containers/apps/chat/nav-left";
import Sidebar from "../../../containers/apps/chat/sidebar";
import Main from "../../../containers/apps/chat/main";
import SEO from "../../../components/seo";

const Chat: FC = () => {
    return (
        <Layout sidebarLayout={2}>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody container={false} p={["0px", "0px"]}>
                    <Wrapper layout={2}>
                        <NavLeft layout={2} />
                        <Sidebar layout={2} />
                        <Main layout={2} />
                    </Wrapper>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default Chat;
