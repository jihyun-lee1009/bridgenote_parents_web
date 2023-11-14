import React, { useRef, useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

import { useRecoilState } from 'recoil';
import { userId } from '../stores/Recoil';

const ParentFindPasswd = () => {
    const [num, SetNum] = useState('');
    const [phoneNum, SetPhoneNum] = useState({ phoneNumber: '' });
    const [userPhone, setUserPhone] = useRecoilState(userId);
    const phoneRef = useRef();

    const [verifyDt, SetVerify] = useState({ phoneNumber: '', verifyCode: '' });
    const [numVerify, SetNumVerify] = useState('')

    const [sendBtn, SetSendBtn] = useState(true);
    const [verifyBtn, SetVerifyBtn] = useState(true);
    const [joinBtn, SetJoinBtn] = useState(true);
    const [result, SetResult] = useState('');

    const PhoneNumChange = (event) => {
        const value = phoneRef.current.value.replace(/\D+/g, "");
        const numberLength = 11;

        let result;
        result = "";

        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 3:
                    result += "-";
                    break;
                case 7:
                    result += "-";
                    break;

                default:
                    break;
            }

            result += value[i];
        }

        phoneRef.current.value = result;

        event.preventDefault();
        SetNum(event.target.value);
        SetPhoneNum({ ...phoneNum, phoneNumber: event.target.value.replace(/-/g, "") })
        SetVerify({ ...verifyDt, phoneNumber: event.target.value.replace(/-/g, "") })

        if (event.target.value.replace(/-/g, "").length === 11) SetSendBtn(false)
        else SetSendBtn(true)
    }

    const VerifyCdChange = (event) => {
        event.preventDefault();
        SetVerify({ ...verifyDt, verifyCode: event.target.value })
    }
    const send = () => {
        SetNumVerify('휴대폰 번호를 확인해주세요.')
        SetVerifyBtn(true)
    }

    const sendSMS = () => {
        const regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
        regExp.test(phoneNum.phoneNumber) ? (
            Axios
                .post("http://127.0.0.1:8080/send", phoneNum)
                .then(function (response) {
                    console.log("성공", response);
                    // response
                    SetNumVerify('인증번호가 발송되었습니다.')
                    SetSendBtn(true)
                    SetVerifyBtn(false)
                })
                .catch(function (error) {
                    // 오류발생시 실행
                    console.log("실패", error);
                    SetNumVerify('휴대폰 번호를 확인해주세요.')
                    SetSendBtn(false)
                    SetVerifyBtn(true)
                })
                .then(function () {
                    // 항상 실행
                    console.log("데이터 요청 완료");
                }))
            : send()
    }

    const verifySMS = () => {
        Axios
            .post("http://127.0.0.1:8080/verify", verifyDt)
            .then(function (response) {
                console.log("성공", response);
                // response
                if (response.data === '인증완료') {
                    SetResult('인증번호가 일치합니다.')
                    SetVerifyBtn(true)
                    SetJoinBtn(false)
                    setUserPhone(verifyDt.phoneNumber)
                }
                else if (response.data === '인증번호 불일치') {
                    SetResult('인증번호가 일치하지 않습니다.')
                    SetVerifyBtn(false)
                    SetJoinBtn(true)
                }
                else {
                    SetResult('인증 실패, 관리자에게 문의하세요.')
                    SetVerifyBtn(true)
                    SetJoinBtn(true)
                }
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log("실패", error);
                SetResult('인증번호가 일치하지 않습니다.')
                SetVerifyBtn(false)
            })
            .then(function () {
                // 항상 실행
                console.log("데이터 요청 완료");
            });
    }

    return (
        <>
            <ContentBox>
                <h4>회원가입</h4>
                <p><strong>본인인증<IoIosArrowForward className='arrow' size='25' /></strong>계정정보<IoIosArrowForward className='arrow' size='25' />가입완료</p>
                <JoinBox>
                    <h4>휴대폰 번호</h4>
                    <VerifyArea>
                        <input type="tel" value={num} ref={phoneRef} onChange={PhoneNumChange} />
                        <button disabled={sendBtn} onClick={sendSMS}>인증번호 받기</button>
                    </VerifyArea>
                    <span>{numVerify ? numVerify : ''}</span>
                    <h4>인증번호</h4>
                    <VerifyArea>
                        <input type='number' value={verifyDt.verifyCode} onChange={VerifyCdChange} />
                        <button disabled={verifyBtn} onClick={verifySMS}>인증번호 확인</button>
                    </VerifyArea>
                    <span>{result ? result : ''}</span>
                    <GotoJoin>
                        <Link
                            className="join"
                            to="/parent/join/password"
                            tabIndex={1}
                            title="회원가입"
                        >
                            <LoginBtn disabled={joinBtn}>회원가입</LoginBtn>
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
    & > h4 {
        margin: 1.5em 0;
    }
    & > p {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 3em;
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
`

const JoinBox = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 1em;
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
        width: 60%;
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
export default ParentFindPasswd;
