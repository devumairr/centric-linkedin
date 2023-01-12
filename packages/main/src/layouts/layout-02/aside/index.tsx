import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import { NavbarAside } from "@doar/components";
import { asideMenuData } from "@doar/shared/data";
import { ISize } from "@doar/shared/types";
import Header from "../header";
import Scrollbar from "../../../components/scrollbar";
import AsideUser from "../../../components/aside-layout/user";
import { useWindowSize } from "../../../hooks";
import {
    StyledAside,
    StyledBody,
    StyledBodyInner,
    StyledBackdrop,
} from "./style";

type TMaxText = "enter" | "leave";

interface IProps {
    layout?: "minimize";
    sidebarLayout?: 1 | 2;
}

const Aisde: React.FC<IProps> = ({ layout, sidebarLayout }) => {
    const [minimize, setMinimize] = useState(layout === "minimize");
    const [maximize, setMaximize] = useState(false);
    const [show, setShow] = useState(false);
    const size: ISize = useWindowSize();
    const maximized = useRef(false);
    const mdMinimize = useRef(true);

    const minimizeHandler = () => {
        setMinimize((prev) => !prev);
    };

    const displayHandler = () => {
        setMinimize(false);
        setShow((prev) => !prev);
    };

    useEffect(() => {
        if (!size.width) return;
        if (
            size.width > 991 &&
            size.width < 1200 &&
            !show &&
            layout !== "minimize"
        ) {
            setMinimize(true);
        }
        if (
            size.width >= 1200 &&
            maximized.current === false &&
            layout !== "minimize"
        ) {
            setMinimize(false);
            maximized.current = true;
        }
        if (size.width <= 1199) {
            maximized.current = false;
        }
        if (size.width <= 991) {
            setMinimize(false);
        }
    }, [size.width, show, layout]);

    const maximizeHandler = (e: React.MouseEvent, text: TMaxText) => {
        e.preventDefault();
        if (!minimize) return;
        if (text === "enter") {
            setMaximize(true);
        }
        if (text === "leave") {
            setMaximize(false);
        }
    };

    const minClass = minimize ? "minimize" : "";
    const maxClass = maximize ? "maximize" : "";

    return (
        <>
            <StyledBackdrop $show={show} onClick={displayHandler} />
            <StyledAside
                className={cn(minClass, maxClass)}
                $minimize={minimize}
                $mdMinimize={mdMinimize.current}
                $maximize={maximize}
                $show={show}
            >
                <Header
                    minimizeHandler={minimizeHandler}
                    displayHandler={displayHandler}
                    minimize={minimize}
                    mdMinimize={mdMinimize.current}
                    show={show}
                    sidebarLayout={sidebarLayout}
                />
                <StyledBody
                    $minimize={minimize}
                    $mdMinimize={mdMinimize.current}
                    $maximize={maximize}
                    $show={show}
                    className="aside-body"
                    onMouseEnter={(e) => maximizeHandler(e, "enter")}
                    onMouseLeave={(e) => maximizeHandler(e, "leave")}
                >
                    <Scrollbar>
                        <StyledBodyInner className="aside-body-inner">
                            <AsideUser />
                            <NavbarAside menus={asideMenuData} />
                        </StyledBodyInner>
                    </Scrollbar>
                </StyledBody>
            </StyledAside>
        </>
    );
};

export default Aisde;
