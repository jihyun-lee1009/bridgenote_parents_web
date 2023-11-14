import React, { useRef, useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { FiShield } from 'react-icons/fi';

import { useRecoilState, useRecoilValue } from 'recoil';
import { userId, userPw, userVerifyPw } from '../../stores/Recoil';


const ParentSetPasswd = () => {
    const phoneNum = useRecoilValue(userId);
    const [passwd, SetPasswd] = useRecoilState(userPw)
    const [verifypw, SetVerifyPw] = useRecoilState(userVerifyPw)

    const [pwRule, SetPwRule] = useState('')
    const [pwRuleColor, SetPwRuleColor] = useState('')
    const [pwVerify, SetPwVerify] = useState('')
    const [pwVerifyColor, SetPwVerifyColor] = useState('')
    const [joinBtn, SetJoinBtn] = useState(true);

    const handleFocusOn = (event) => {
        SetPwRule('6 ~ 20자 영문, 숫자 조합 입력');
    }

    const handleFocusOn2 = (event) => {
        SetPwVerify('비밀번호가 일치하지 않습니다.');
    }

    const PasswdChange = (event) => {
        event.preventDefault();
        SetPasswd(event.target.value)
        //  6 ~ 20자 영문, 숫자 조합
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/
        regExp.test(event.target.value) ? SetPwRuleColor('#03BF62') : SetPwRuleColor('#FF0000')
    }

    const VerifyPwChange = (event) => {
        event.preventDefault();
        SetVerifyPw(event.target.value);
        if (event.target.value === passwd) {
            SetPwVerify('비밀번호가 일치합니다.');
            SetPwVerifyColor('#03BF62');
        }
        else {
            SetPwVerify('비밀번호가 일치하지 않습니다.');
            SetPwVerifyColor('#FF0000');
        }
    }

    return (
        <>
            <ContentBox>
                <h3>회원가입</h3>
                <p><strong>본인인증<IoIosArrowForward className='arrow' size='25' />계정정보<IoIosArrowForward className='arrow' size='25' /></strong>가입완료</p>
                <FiShield className='shield' size='100' />
                <h4>6 ~ 20자 영문, 숫자 조합으로<br />고유한 비밀번호로 계정을 보호하세요.</h4>
                <JoinBox>
                    <VerifyArea>
                        <input type="password" value={passwd} placeholder='비밀번호' onFocus={handleFocusOn} onChange={PasswdChange} />
                    </VerifyArea>
                    <span style={{ color: pwRuleColor }}>{pwRule ? pwRule : ''}</span>
                    <VerifyArea>
                        <input type='password' value={verifypw} placeholder='비밀번호 확인' onFocus={handleFocusOn2} onChange={VerifyPwChange} />
                    </VerifyArea>
                    <span style={{ color: pwVerifyColor }}>{pwVerify ? pwVerify : ''}</span>
                    <GotoJoin>
                        <Link
                            className="join"
                            to="/parent/join/finish"
                            tabIndex={1}
                            title="회원가입"
                        >
                            <LoginBtn disabled={joinBtn}>다음</LoginBtn>
                        </Link>
                    </GotoJoin>
                </JoinBox>
            </ContentBox>
        </>
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
    & > h3 {
        margin: 1.5em 0;
    }
    & > h4 {
        margin: 0;
        padding-top: 1em;
        color: #4B5A64;
        font-size: 1.1em;
        font-weight: 600;
    }
    & > p {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5em;
        margin: 0;
        color: #999999;
        font-size: 18px;
        font-weight: bold;
        & > strong {
            display: flex;
            align-items: center;
            color: #03BF62;
        }
    }
    & > .shield {
        stroke: #999999;
        stroke-width: 1px;
    }
`

const JoinBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    & > h4 {
        text-align: left;
        margin: 0;
    }
    & > input{
        padding: 1em;
        margin: 1em 0;
        border: 1px solid #868E96;
        border-radius: 5px;
    }
    & > span{
        margin-left: 1em;
        line-height: 2.5em;
        color: #FF0000;
        text-align: left;
        font-size: 12px;
        font-weight: 600;
    }
`

const GotoJoin = styled.div`
    width: 100%;
    display: flex;
    margin: 0.5em 0;
    & > a {
        width: 100%;
    }
    
`

const VerifyArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0.5em 0;
    & > input {
        width: 100%;
        padding: 1em;
        border: 1px solid #868E96;
        border-radius: 5px;
    }
    & > button {
        border: 0;
        outline: 0;
        margin-left: 0.5em;
        color: #ffffff;
        background-color: #03BF62;
        border-radius: 5px;
    }
    & > button:disabled {
        background-color: #868E96;
    }
`

const LoginBtn = styled.button`
    width: 100%;
    padding: 1em;
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    color:#ffffff;
    background-color: #03BF62;
    &:disabled {
        background-color: #868E96;
    }
`


export default ParentSetPasswd;
