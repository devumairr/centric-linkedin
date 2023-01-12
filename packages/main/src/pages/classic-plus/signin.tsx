import React from "react";
import { Container } from "@doar/components";
import AuthContainer from "../../containers/signin";
import AuthLayout from "../../layouts/layout-02/AuthLayout";

const SignIn: React.FC = () => {
    return (
        <AuthLayout>
            <Container className="container" px="2" py="5">
                <AuthContainer />
            </Container>
        </AuthLayout>
    );
};

export default SignIn;
