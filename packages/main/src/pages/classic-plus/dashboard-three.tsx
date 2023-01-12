import React from "react";
import { Row } from "@doar/components";
import { CryptoFontCSS } from "@doar/shared/css";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import WelcomeArea from "../../containers/dashboard-three/welcome-area";
import RowOne from "../../containers/dashboard-three/row-one";
import RowTwo from "../../containers/dashboard-three/row-two";
import RowThree from "../../containers/dashboard-three/row-three";
import RowFour from "../../containers/dashboard-three/row-four";
import RowFive from "../../containers/dashboard-three/row-five";
import SEO from "../../components/seo";

const DashboardThree: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <CryptoFontCSS />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <WelcomeArea />
                    <Row gutters={10}>
                        <RowOne />
                        <RowTwo />
                        <RowThree />
                        <RowFour />
                        <RowFive />
                    </Row>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default DashboardThree;
