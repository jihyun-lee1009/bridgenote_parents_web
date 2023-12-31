import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
    p{
        font-size: 1.1em;
        font-weight: 700;
    }
`;

const LoginBox = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20px;
    p{
        font-size: 1.2em;
        font-weight: 700;
    }
`;

const LonginContent = styled.form`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 2em;
    & > h5 {
        text-align: start;
        margin: 1em 0 0 0;
    }
    & > input{
        padding: 1em;
        margin: 1em 0 0.5em 0;
        border: 1px solid #868E96;
        border-radius: 5px;
    }
    & > span{
        text-align: start;
    color: #EE283D;
    font-size: 0.875em;
    font-weight: 700;
    }
`;

const LoginBtn = styled.button`
    color: ${props => (props.$isValid ? '#191919' : '#19191980')};
    background-color: ${props => (props.$isValid ? '#FFE100' : '#FFE10080')};
    font-size: 1.2em;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    padding: 1em;
    margin-top: 2em;
`




const Login = () => {
    const [phonenum, setPhonenum] = useState('');
    const [validphone, setValidphone] = useState(true);
    const phoneRef = useRef();

    const [password, setPassword] = useState();
    const [validpwd, setValidpwd] = useState(true);

    const [isLogin, setIsLogin] = useState(false);


    // 핸드폰번호 유효성 검사
    const checkPhonenumber = (e) => {
        // '-' 입력 시
        let regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        setValidphone(regExp.test(e.target.value));
    }

    // 휴대폰 번호 입력 함수
    const handlePhone = (e) => {
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

        setPhonenum(e.target.value);
    };

    //비밀번호 유효성 검사
    const checkPassword = (e) => {
        //  8 ~ 10자 영문, 숫자 조합
        let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
        // 형식에 맞는 경우 true 리턴
        setPassword(e.target.value);
        setValidpwd(regExp.test(e.target.value))
    }

    const LoginFunc = () => {
        // const response = axios.get("https://192.168.0.227:9020/parents/login", {
        //     "phone": phonenum,
        //     "password": password
        // })
        //     .then((res) => {
        //         console.log(res.data.code);
        //         if (res.data.code === 200) {
        //             console.log("로그인");
        //             setIsLogin(true);
        //         }
        //     });
        // console.log(isLogin)
        window.location.href = "/parent/terms";
    };

    return (
        <LoginContainer>
            <p>브릿지노트 시작하기</p>
            <LoginBox>
                <p>학부모 로그인</p>
                <LonginContent onSubmit={LoginFunc}>
                    <h5>휴대폰번호</h5>
                    <input type='tel' placeholder='휴대폰번호 입력' value={phonenum} ref={phoneRef} onChange={handlePhone} onBlur={checkPhonenumber} />
                    {validphone ? <></> : <span>아이디를 확인해주세요.</span>}
                    <h5>비밀번호</h5>
                    <input type='password' placeholder='비밀번호 입력' onBlur={checkPassword} />
                    {validpwd ? <></> : <span>비밀번호를 확인해주세요.</span>}
                    <LoginBtn $isValid={phonenum !== '' && validphone && password !== '' && validpwd}>로그인</LoginBtn>
                </LonginContent>
            </LoginBox>
        </LoginContainer>
    )
}

export default Login
