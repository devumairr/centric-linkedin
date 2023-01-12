import React from "react";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import ErrorContainer from "../../containers/error-404";
import SEO from "../../components/seo";

const ErrorNotFound: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <ContentHeader />
                <ContentBody>
                    <ErrorContainer />
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default ErrorNotFound;
