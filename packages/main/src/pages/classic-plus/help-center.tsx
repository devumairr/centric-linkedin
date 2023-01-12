import React from "react";
import { HRLine } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PageHeader from "../../containers/help-center/page-header";
import RowOne from "../../containers/help-center/row-one";
import RowTwo from "../../containers/help-center/row-two";
import SEO from "../../components/seo";

const HelpCenter: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <PageHeader pb="40px" />
                    <RowOne />
                    <HRLine mt="60px" mb="30px" />
                    <RowTwo />
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default HelpCenter;
