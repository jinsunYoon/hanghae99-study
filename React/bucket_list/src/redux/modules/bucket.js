// bucket.js
import {db} from "../../firebase";
import { 
    collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc
    } from 'firebase/firestore';
import { async } from '@firebase/util';

// Actions
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';
const LOADED = 'bucket/LOAEDE';

// 초기값
const initialState = {
    is_loaded : false,
    list : []
    // list : ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"]
};

// Action Creators
export function loadBucket(bucket_list){
    return{ type : LOAD, bucket_list};
};

export function createBucket(bucket){
    console.log("액션을 생성할거야!");
    return{ type : CREATE, bucket};
};

export function deleteBusket(bucket_index){
    console.log("지울 버킷 인덱스", bucket_index);
    return{ type : DELETE, bucket_index};
};

export function updateBucket(bucket_index){
    return {type : UPDATE, bucket_index};
};

export function isLoaded(loaded){
    return {type : LOADED, loaded};
};

//middleware 
export const loadBucketFB = () => {
    return async function (dispatch){
        const bucket_data = await getDocs(collection(db, "bucket"));
        console.log(bucket_data);

        let bucket_list = [];

        bucket_data.forEach((b) => {
            console.log(b.data());
            bucket_list.push({id: b.id,...b.data()});
        });
        console.log(bucket_list);

        dispatch(loadBucket(bucket_list));
    };
};

export const addBucketFB = (bucket) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "bucket"), bucket);
        const bucket_data = {id: docRef.id, ...bucket};
        console.log(bucket_data);

        dispatch(createBucket(bucket_data));
    };
};

export const updateBucketFB = (bucket_id) => {
    return async function (dispatch, getState){
        const docRef = doc(db, "bucket", bucket_id);
        await updateDoc(docRef, {completed:true});
        
        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((b) => {
            return b.id === bucket_id;
        })
        dispatch(updateBucket(bucket_index));
    };
};

export const deleteBusketFB = (bucket_id) => {
    return async function (dispatch, getState){
        if(!bucket_id){
            window.alert("아이디가 없네요!");
            return;
        }
        const docRef = doc(db, "bucket", bucket_id);
        await deleteDoc(docRef);

        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((b) => {
            return b.id === bucket_id;
        });
        dispatch(deleteBusket(bucket_index));
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD" : {
            return{ list : action.bucket_list, is_loaded : true};
        }

        case "bucket/CREATE" : {
            console.log("이제 값을 바꿀거야!")
            const new_bucket_list = [...state.list, action.bucket];
            return {...state, list : new_bucket_list};
        }

        case "bucket/DELETE" : {
            console.log(state, action);
            const new_bucket_list = state.list.filter((l, idx) => {
                return parseInt(action.bucket_index) !== idx;
            })
            return {...state, list : new_bucket_list};
        }

        case "bucket/UPDATE" : {
            console.log("이제 완료할거야!");
            const new_bucket_list = state.list.map((l, idx) => {
                if(parseInt(action.bucket_index) === idx){
                    return {...l, completed: true};
                }else{
                    return l;
                }
            })
            console.log({list :new_bucket_list});
            return {...state, list :new_bucket_list};
        }

        case "bucket/LOADED" : {
            return {...state, is_loaded : action.loaded};
        }

        default: return state;
    };
};
