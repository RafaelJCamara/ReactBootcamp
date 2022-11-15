import React from 'react';
import {UserContext, PostContext} from "../App";

function Post(props){
    const currentUser = React.useContext(UserContext);
    const {dispatch} = React.useContext(PostContext);
    const isCurrentUser = currentUser === props.post.username;

    function handlePostDeletion(){
        dispatch({type: "DELETE_POST", payload: {id: props.post.id}});
    }

    return (
        <React.Fragment>
            {
                props.post.image && (
                    <img 
                        style = {{height:100, width:200, objectFit:"cover"}}
                        src = {URL.createObjectURL(props.post.image)}
                        alt = "Post cover"
                        />
                )
            }
            <p>{props.post.content}</p>
            <p style={{color: isCurrentUser && "green"}} >Posted by: {props.post.username}</p>
            {isCurrentUser && <button onClick={handlePostDeletion}>Delete</button>}
        </React.Fragment>
    )
}

export default Post;