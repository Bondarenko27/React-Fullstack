import React,{useEffect, useState} from "react";
import{useParams} from "react-router-dom";
import axios from "axios";


function OpenPost(){
    let{id} = useParams();
    const[postObject,setPostObject] = useState ({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        })

    })

    return <div className="postPage">
        <div className="leftSide"></div>
        <div className="title">{postObject.title}</div>
        <div className="text">{postObject.text}</div>
        <div className="username">{postObject.username}</div>
        <div className="rightSide"> comments</div>
        </div>;

}
export default OpenPost;