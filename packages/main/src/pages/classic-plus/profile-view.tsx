import React from "react";
import { Media, MediaBody } from "@doar/components";
import Layout from "../../layouts/layout-02";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import LeftSidebar from "../../containers/profile-view/left-sidebar";
import MainContent from "../../containers/profile-view/main";
import RightSidebar from "../../containers/profile-view/right-sidebar";
import SEO from "../../components/seo";

const ProfileView: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <Media display={["block", null, null, "flex"]}>
                        <LeftSidebar />
                        <MediaBody
                            mt={["40px", null, null, 0]}
                            px={[null, null, null, "10px"]}
                        >
                            <MainContent />
                        </MediaBody>
                        <RightSidebar />
                    </Media>
                </ContentBody>
            </Content>
        </Layout>
    );
};

export default ProfileView;
