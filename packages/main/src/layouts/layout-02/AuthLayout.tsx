import React from "react";

interface IProps {
    aside?: "minimize";
    sidebarLayout?: 1 | 2;
}

const AuthLayout: React.FC<IProps> = ({ children }) => {
    return <>{children}</>;
};

AuthLayout.defaultProps = {
    sidebarLayout: 1,
};

export default AuthLayout;
