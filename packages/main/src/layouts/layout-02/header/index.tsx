import React, { useCallback } from "react";
import { Menu, X, ArrowLeft } from "react-feather";
import AsideLogo from "../../../components/aside-layout/logo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleSidebar, toggleBody } from "../../../redux/slices/ui";
import { StyledHeader, StyledMenuBtn, StyledSidebarBtn } from "./style";

interface IProps {
    minimizeHandler: () => void;
    displayHandler: () => void;
    minimize: boolean;
    mdMinimize: boolean;
    show: boolean;
    sidebarLayout?: 1 | 2;
}

const Header: React.FC<IProps> = ({
    minimizeHandler,
    displayHandler,
    minimize,
    mdMinimize,
    show,
    sidebarLayout,
}) => {
    const dispatch = useAppDispatch();
    const { sidebar, isBody } = useAppSelector((state) => state.ui);
    const sidebarHandler = useCallback(
        (_, isOpen?: "open") => {
            dispatch(toggleSidebar({ isOpen }));
        },
        [dispatch]
    );

    const bodyHandler = useCallback(() => {
        dispatch(toggleBody());
        dispatch(toggleSidebar({ isOpen: "open" }));
    }, [dispatch]);

    const menuHandler = useCallback(() => {
        displayHandler();
        if (show) {
            sidebarHandler(undefined, "open");
        }
    }, [show, sidebarHandler, displayHandler]);

    return (
        <StyledHeader
            $minimize={minimize}
            $mdMinimize={mdMinimize}
            $show={show}
            className="aside-header"
        >
            <AsideLogo />

            <StyledMenuBtn className="minimize-btn" onClick={minimizeHandler}>
                <Menu size={18} strokeWidth="2.5px" />
            </StyledMenuBtn>

            {sidebarLayout === 1 && (
                <>
                    <StyledMenuBtn
                        className="display-btn"
                        onClick={menuHandler}
                    >
                        <Menu size={18} strokeWidth="2.5px" />
                        <X size={18} strokeWidth="2.5px" />
                    </StyledMenuBtn>
                    <StyledSidebarBtn
                        onClick={!isBody ? sidebarHandler : bodyHandler}
                        $sidebarOpen={sidebar}
                        $bodyOpen={isBody}
                    >
                        <ArrowLeft size={20} strokeWidth="2.5px" />
                    </StyledSidebarBtn>
                </>
            )}
            {sidebarLayout === 2 && (
                <>
                    <StyledMenuBtn
                        className="display-btn"
                        onClick={menuHandler}
                    >
                        <Menu size={18} strokeWidth="2.5px" />
                        <X size={18} strokeWidth="2.5px" />
                    </StyledMenuBtn>
                    <StyledSidebarBtn
                        onClick={sidebarHandler}
                        $sidebarOpen={!sidebar}
                    >
                        <ArrowLeft size={20} strokeWidth="2.5px" />
                    </StyledSidebarBtn>
                </>
            )}
        </StyledHeader>
    );
};

export default Header;
