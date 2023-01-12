import React from "react";
import { Media, MediaBody } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PageHeader from "../../components/page-header";
import MainContent from "../../containers/timeline/main";
import Sidebar from "../../containers/timeline/sidebar";
import SEO from "../../components/seo";

const Timeline: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <PageHeader
                        prev={[{ text: "Profile", link: "/profile-view" }]}
                        title="Timeline"
                        wcText="Timeline"
                        pb="40px"
                    />
                    <Media display={["block", null, null, "flex"]}>
                        <MediaBody>
                            <MainContent />
                        </MediaBody>
                        <Sidebar />
                    </Media>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default Timeline;
