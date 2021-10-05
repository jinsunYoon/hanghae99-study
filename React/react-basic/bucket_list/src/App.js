import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadBucketFB, addBucketFB} from "./redux/modules/bucket";
import {db} from "./firebase";
import { 
  collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc
} from 'firebase/firestore';

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from './NotFound';
import Progress from './Progress';
import Spinner from './spinner';

function App() {

const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
const text = React.useRef(null);

const dispatch = useDispatch();
const is_loaded = useSelector(state => state.bucket.is_loaded);
  
React.useEffect(() => {
    dispatch(loadBucketFB());
}, []);

const addBucketList = () => {
  // 스프레드 문법! 기억하고 계신가요? :) 
  // 원본 배열 list에 새로운 요소를 추가해주었습니다.
  // setList([...list, text.current.value]);
  // dispatch(createBucket({text: text.current.value, completed: false}));
  dispatch(addBucketFB({text: text.current.value, completed: false}));
};
return (
  <div className="App">
  <Container>
    <Title>내 버킷리스트</Title>
    <Progress/>
    <Line />
    {/* 컴포넌트를 넣어줍니다. */}
    {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
    <List>
      <Switch>
          <Route path="/" exact>
            <BucketList list={list}/>
          </Route>
          <Route path="/Detail/:index">
            <Detail/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
    </List>
  </Container>
  {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
  <Input>
    <input type="text" ref={text} />
    <button onClick={addBucketList}>추가하기</button>
  </Input>
  {!is_loaded && <Spinner/>}
  </div>
);
}

const List = styled.div`
  max-width: 350px;
  min-height: 460px;
  max-height: 460px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Input = styled.div`
max-width: 350px;
min-height: 30px;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
display: flex;
align-items: center;
justify-content: center;

& input{
  border: 1px solid lightgray;
  height: 20px;
  border-radius: 5px;
}

& input:focus {
  outline: none;
  border: 1px solid #a673ff;
}
`;

const Container = styled.div`
max-width: 350px;
min-height: 600px;
max-height: 600px;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;


