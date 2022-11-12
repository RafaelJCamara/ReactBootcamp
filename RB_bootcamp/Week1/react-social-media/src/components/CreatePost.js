import React from 'react';

function CreatePost(props){
    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState(null);
    const imageInputReference = React.useRef();

    function handleOnSubmit(event){
        event.preventDefault();
        var username = props.username;
        const post = {content, image, username};
        props.handleNewPost(post); 
        setContent("");
        setImage(null);
        imageInputReference.current.value = '';
    }

    function handleDescriptionChange(event){
        setContent(event.target.value);
    }

    function handleFileUpload(event){
        // files returns an array, but we are only interested on the first element because it contains our file
        setImage(event.target.files[0]);
    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleOnSubmit}>
                <input type='text' placeholder='Insert description' onChange={handleDescriptionChange} value={content} />
                <input type='file' onChange={handleFileUpload} ref={imageInputReference} />
                <button type='submit'>Submit post</button>
            </form>
        </div>
    );
}

export default CreatePost;