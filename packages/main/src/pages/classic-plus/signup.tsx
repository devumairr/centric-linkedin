import React from "react";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import AuthContainer from "../../containers/signup";
import SEO from "../../components/seo";

const SignUp: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight>
                <ContentHeader />
                <ContentBody>
                    <AuthContainer />
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default SignUp;
