import React from 'react';
import Post from './Post';

function PostList(props){
    return (
        <div>
            {
                props.posts.map(
                    (post, index) => (
                        <Post post={post} key={post.id}/>
                    )
                )
            }
        </div>
    );
}

export default PostList;