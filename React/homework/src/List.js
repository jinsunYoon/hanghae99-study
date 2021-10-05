import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const List = (props) => {
    const my_lists = useSelector((state) => state.card.list);
    console.log(my_lists);

    
    return(
        <Box>
            <Dictionary>
                {/* <p>단어</p>
                <Name>ㅎ1ㅎ1</Name>
                <p>설명</p>
                <Ex>ㅎ1ㅎ1는 ㅎ1ㅎ1다</Ex>
                <p>예시</p>
                <Exam>동해물과백두산이마르고닳도록</Exam> */}
                {my_lists.map((list, index) => {
                    return (
                        <>
                            <p>
                            <Name className="vocab" key={index}>
                                {list.vocab}
                            </Name>
                            </p>
                            <p>
                            <Ex className="definition" key={index}>
                                {list.definition}
                            </Ex>
                            </p>
                            <p>
                            <Exam className="example" key={index}>
                                {list.example}
                            </Exam>
                            </p>
                        </>
                    );
                })}
            </Dictionary>
        </Box>
    );
};

const Box = styled.div` 
    margin: 20px auto 0px auto;
    width: 270px;
    max-height: 430px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
`;

const Dictionary = styled.div`
    width: 220px;
    padding: 0px 16px 16px 16px;
    border: 1px solid #c1e2ff;
    margin-bottom: 10px;
    border-radius: 10px;
    & p{
        font-size: 15px;
        font-weight: bold;
        color: gray;
        border-bottom: 1px dotted lightgray;
    }
`;

const Name = styled.div`
    color: black;
    font-size: 20px;
`;

const Ex = styled.div`
    color: gray;
    font-size: 16px;
`;

const Exam = styled.div`
    color: darkgray;
    font-size: 15px;
`;

export default List;