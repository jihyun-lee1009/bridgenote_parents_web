import React, { useState } from "react";

// ICONS
import { AiOutlineClose } from "react-icons/ai";
import { PiDotsThreeOutlineLight } from 'react-icons/pi'

import { IconContext } from "react-icons";

// ROUTING

import { Link, NavLink } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SidebarData";

// STYLES
import { styled } from 'styled-components';

const ParentSidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#999999" }}>
                <NavStyle className={sidebar ? "active" : ""}>
                    <NavItems onClick={showSidebar}>
                        <NavToggle>
                            <MenuBars to="#">
                                <AiOutlineClose />
                            </MenuBars>
                        </NavToggle>
                        {SidebarData.map((item, index) => {
                            return (
                                <NavText key={index}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </NavText>
                            );
                        })}
                    </NavItems>
                </NavStyle>
                <Navbar>
                    <MenuBars to="#">
                        <PiDotsThreeOutlineLight onClick={showSidebar} />
                    </MenuBars>
                </Navbar>
            </IconContext.Provider>
        </>
    );
}


const NavStyle = styled.nav`
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;

    &.active {
        right: 0;
        transition: 350ms;
    }
`

const NavItems = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;
    background: black;
`

const NavToggle = styled.li`
    background-color: var(--navBg);
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`

const MenuBars = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`

const NavText = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0 8px 16px;
    list-style: none;
    height: 60px;
    & > a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    & > a:hover {
        background-color: #1a83ff;
    }
`

const Navbar = styled.div`
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export default ParentSidebar;