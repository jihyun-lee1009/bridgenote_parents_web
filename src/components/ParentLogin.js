import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import LogoImage from '../assets/logo.svg'

// 핸드폰번호 유효성 검사
const checkPhonenumber = (e) => {
    // '-' 입력 시
    let regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/

    // 형식에 맞는 경우 true 리턴
    console.log('핸드폰번호 유효성 검사 :', regExp.test(e.target.value))
}

//비밀번호 유효성 검사
const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    // 형식에 맞는 경우 true 리턴
    console.log('비밀번호 유효성 검사 : ', regExp.test(e.target.value))
}

const ParentLogin = () => {
    return (
        <ContentBox>
            <h4>학부모 상담 예약 서비스</h4>
            <Logo src={LogoImage} alt='로고' />
            <LoginBox>
                <h5>휴대폰번호</h5>
                <input type='tel' placeholder='전화번호 입력' onBlur={checkPhonenumber} />
                <h5>비밀번호</h5>
                <input type='password' placeholder='비밀번호 입력' onBlur={checkPassword} />
                <LoginBtn>로그인</LoginBtn>
                <JoinBox>
                    <Link
                        className="join"
                        to="/parent/join"
                        tabIndex={1}
                        title="회원가입"
                    >
                        회원가입
                    </Link>
                    <Link
                        className="join"
                        to="/parent/findpw"
                        tabIndex={1}
                        title="비밀번호 찾기"
                    >
                        비밀번호 찾기
                    </Link>
                </JoinBox>
            </LoginBox>
        </ContentBox>
    );
}

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 400px;
    padding: 40px 0;
    border-radius: 50%;
`

const Logo = styled.img`
    width: 250px;
`

const LoginBox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 2em;
    & > h5 {
        text-align: start;
        margin: 0;
    }
    & > input{
        padding: 1em;
        margin: 1em 0;
        border: 1px solid #868E96;
        border-radius: 5px;
    }
`

const LoginBtn = styled.button`
    color:#ffffff;
    background-color: #03BF62;
    border: 0;
    border-radius: 5px;
    padding: 1em;
`

const JoinBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0;

    & > a{
        color: #000000;
        background-color: transparent;
        outline: 0;
        border: 0;
        text-decoration: none;
        font-size: 0.9em;
        font-weight: 600;
    }
`

export default ParentLogin;
