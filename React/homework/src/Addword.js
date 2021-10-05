import React, { useRef } from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";

const Addword = (props) => {
    const history = useHistory();

    const vocab = useRef();
    const definition = useRef();
    const example = useRef();

    return(
        <>
        <HeaderBox>
            <Title>단어 추가하기</Title>
        </HeaderBox>
        <Dictionary>
                <p>단어</p>
                <input type="text" ref={vocab}/>
                <p>설명</p>
                <input type="text" ref={definition}/>
                <p>예시</p>
                <input type="text" ref={example}/>
        </Dictionary>
        <Btn>
            <button onClick={() => {
                history.push("/");
            }}>취소</button>
            <button onClick={() => {
                history.goBack()
            }}>저장하기
            </button>
        </Btn>
        </>
    );
};

const HeaderBox = styled.div` 
    margin: 25px auto 40px auto;
    width: 270px;
    height: 40px;
    border-bottom: 1px dotted lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    background: linear-gradient(to right bottom, #7d7de5, #27e9a1); 
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`;

const Dictionary = styled.div`
    padding: 0px 16px 16px 16px;
    margin-bottom: 10px;
    border-radius: 10px;
    & p{
        font-size: 18px;
        font-weight: bold;
        color: gray;
        border-bottom: 1px dotted lightgray;
    }

    & input{
        word-break:break-all;
        width: 97%;
        height: 50px;
    }
`;

const Btn = styled.div`
    padding: 0px 16px;
    display: flex;
    justify-content: space-around;

    & button{
        border-style: none;
        background: none;
        border: 1px solid #7a80e3;
        border-radius: 5px;
        color: #7a80e3;
        width: 90px;
        height: 30px;
        cursor: pointer;
    }
`;

export default Addword;