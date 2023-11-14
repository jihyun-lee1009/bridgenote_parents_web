import React from 'react';
import LogoImage from '../assets/logo.svg'
import Parents from '../assets/main/parents.svg'
import Teachers from '../assets/main/teachers.svg'
import Managers from '../assets/main/managers.svg'
import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8em 0;
    @media screen and (max-width: 1440px) {
        padding: 4em 0;
    }
`;
const MainTopBox = styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-size: 1.3em;
        font-weight: 700;
    }
    @media screen and (max-width: 576px) {
        p{
        font-size: 1em;
        }
    }
`;

const MainBottomBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

const MainContent = styled.div`
    width: 29%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 0 1em;
    margin: 0 0.5em;
    border-radius: 1em;
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #191919;
        font-size: 1.2em;
        font-weight: 600;
        padding: 1em 0;
    }
    img{
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 1024px) {
        a{
            font-size: 0.875em;
        }
    }
    @media screen and (max-width: 576px) {
        width: 80%;
        margin: 0.5em 0;
    }
`;

const Main = () => {
    return (
        <MainContainer>
            <MainTopBox>
                <a href='/'>
                    <img src={LogoImage} alt='학부모' />
                </a>
                <p>홍길초등학교</p>
                <p>로그인 유형을 선택해주세요.</p>
            </MainTopBox>
            <MainBottomBox>
                <MainContent>
                    <a href='/parent/login'>학부모 {<FaAngleRight />}</a>
                    <img src={Parents} alt='브릿지노트' />
                </MainContent>
                <MainContent>
                    <a href='https://www.bridgenote.co.kr/teachers'>선생님 {<FaAngleRight />}</a>
                    <img src={Teachers} alt='브릿지노트' />
                </MainContent>
                <MainContent>
                    <a href='https://www.bridgenote.co.kr/admin'>학교관리자 {<FaAngleRight />}</a>
                    <img src={Managers} alt='브릿지노트' />
                </MainContent>
            </MainBottomBox>
        </MainContainer>
    );
}

export default Main;
