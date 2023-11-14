import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
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

const TermsBox = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20px;
    p:first-child{
        font-size: 1.1em;
        font-weight: 700;
    }
    p:nth-child(2){
        color: #00000057;
        font-size: 1em;
        font-weight: 600;
    }
    p:last-child{
        width: 95%;
        text-align: start;
        color: #00000057;
        font-size: 0.8em;
        font-weight: 400;
    }
`;

const TermsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TermsList = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    padding: 0.5em 0;
    span,label{
        display: flex;
        width: 95%;
        font-size: 1em;
        font-weight: 600;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 15em;
        border: 1px solid #D9D9D9;
        border-radius: 5px;
    }
`;

const Terms = () => {
    return (
        <TermsContainer>
            <p>브릿지노트 시작하기</p>
            <TermsBox>
                <p>약관 동의</p>
                <p>브릿지노트 서비스 사용을 위해서는 약관 동의는 필수입니다.</p>
                <TermsContent>
                    <TermsList>
                        <span>서비스 약관 동의</span>
                        <div>약관 내용</div>
                        <label htmlFor='service'><input type='checkbox' id='service' />동의합니다.</label>
                    </TermsList>
                    <TermsList>
                        <span>개인정보 수집 및 이용 동의</span>
                        <div>약관 내용</div>
                        <label htmlFor='private'><input type='checkbox' id='private' />동의합니다.</label>
                    </TermsList>
                    <label htmlFor='all'><input type='checkbox' id='all' />모두 동의합니다.</label>
                    <p>
                        전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를 할 수 있습니다.
                        <br />
                        선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.
                    </p>
                </TermsContent>
            </TermsBox>
        </TermsContainer>
    );
}

export default Terms;
