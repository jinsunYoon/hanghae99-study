import React from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 
import {useSelector, useDispatch} from "react-redux";
import {deleteBusketFB, updateBucketFB} from './redux/modules/bucket';
import Button from "@material-ui/core/Button";

const Detail = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list);
    const history = useHistory();

    // console.log(bucket_list);
    // console.log(bucket_index);
    // console.log(bucket_list[bucket_index]);
    return(
        <>
        <h1>{bucket_list[bucket_index]? bucket_list[bucket_index].text : ""}</h1>
        <Button
        variant="outlined"
        color="primary"
        onClick={() => {
            // dispatch(updateBucket(bucket_index));
            dispatch(updateBucketFB(bucket_list[bucket_index].id));
            history.push("/");
        }}>완료하기</Button>
        <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
            dispatch(deleteBusketFB(bucket_list[bucket_index].id));
            history.goBack();
        }}>삭제하기</Button>
        </>
    );
};


export default Detail;