import React from "react";
import Layout from "../../../layouts/layout-02";
import Content from "../../../layouts/layout-02/content";
import ContentHeader from "../../../layouts/layout-02/content-header";
import ContentBody from "../../../layouts/layout-02/content-body";
import Wrapper from "../../../containers/apps/file-manager/wrapper";
import Sidebar from "../../../containers/apps/file-manager/sidebar";
import MainContent from "../../../containers/apps/file-manager/main";
import SEO from "../../../components/seo";

const FileManager: React.FC = () => {
    return (
        <Layout aside="minimize">
            <SEO />
            <Content aside="minimize">
                <ContentHeader />
                <ContentBody container={false} p={["0px", "0px"]}>
                    <Wrapper layout={2}>
                        <Sidebar />
                        <MainContent />
                    </Wrapper>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default FileManager;
