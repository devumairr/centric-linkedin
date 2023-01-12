import React from "react";
import { Row } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PageHeader from "../../components/page-header";
import MainContent from "../../containers/events/main";
import Sidebar from "../../containers/events/sidebar";
import SEO from "../../components/seo";

const Events: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <PageHeader
                        prev={[
                            { text: "Profile", link: "/profile-view" },
                            { text: "Discover", link: "/" },
                        ]}
                        title="Events"
                        wcText="Discover Events"
                        pb="40px"
                    />
                    <Row>
                        <MainContent />
                        <Sidebar />
                    </Row>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default Events;
