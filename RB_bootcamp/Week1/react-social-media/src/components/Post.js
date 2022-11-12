import React from 'react';

function Post(props){
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
            <p>Posted by: {props.post.username}</p>
        </React.Fragment>
    )
}

export default Post;