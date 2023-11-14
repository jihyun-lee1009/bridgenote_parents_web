import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
// import { PiDotsThreeOutlineLight } from 'react-icons/pi'
import { IconContext } from "react-icons";

import LogoImage from '../assets/logo.svg'
import ParentSidebar from './ParentSidebar';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {

    return (
        <IconContext.Provider value={{ color: "#999999" }}>
            <Wrapper>
                <Content>
                    <Link to="/" tabIndex={1} title="메인페이지로 이동">
                        <Logo src={LogoImage} alt='로고' />
                    </Link>
                    <UserInfo>
                        <FaUserCircle size="35" />
                        <ParentSidebar />
                    </UserInfo>
                </Content>
            </Wrapper>
        </IconContext.Provider>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0px;
    z-index: 5;

    background-color: #ffffff;
    color: #000000;
    border-bottom: 1px solid aliceblue;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    font-size: 1.5rem;

    .menu{
        margin-left: 5%;
        color: #999999;
    }
`

const Content = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width:200px;
`

const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export default Header;
