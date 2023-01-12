import React from "react";
import { Row } from "@doar/components";
import WelcomeArea from "../../containers/dashboard-one/welcome-area";
import RowOne from "../../containers/dashboard-one/row-one";
import RowTwo from "../../containers/dashboard-one/row-two";
import RowThree from "../../containers/dashboard-one/row-three";
import RowFour from "../../containers/dashboard-one/row-four";
import SEO from "../../components/seo";

const Dashboard: React.FC = () => {
    return (
        <>
            <SEO />
            <WelcomeArea />
            <Row gutters={10}>
                <RowOne />
                <RowTwo />
                <RowThree />
                <RowFour />
            </Row>
        </>
    );
};

export default Dashboard;
