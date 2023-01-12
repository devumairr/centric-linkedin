import React from "react";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PasswordContainer from "../../containers/forgot-password";
import SEO from "../../components/seo";

const ForgotPassword: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <ContentHeader />
                <ContentBody>
                    <PasswordContainer />
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default ForgotPassword;
