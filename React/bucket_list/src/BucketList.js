// 리액트 패키지를 불러옵니다.
import React from "react";
import { useHistory } from 'react-router';
import styled from "styled-components";
import {useSelector} from "react-redux";

const BucketList = (props) => {
    // console.log(props);
    // const my_lists = props.list;
    const history = useHistory();
    const my_lists = useSelector((state) => state.bucket.list);

    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                return (
                <ItemStyle completed={list.completed} className="list_item" key={index} onClick={() => {
                    history.push("/Detail/" + index);
                }}>
                    {list.text}
                </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: ${(props) => props.completed ? "#673ab7" : "aliceblue"};
color: ${(props) => props.completed ? "#fff" : "#333"};
border-radius: 5px;
`;

export default BucketList;