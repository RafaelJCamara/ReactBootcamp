import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App(){
    const [user, setUser] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(()=>{
        document.title = user? `${user}'s feed` : 'Please login';
    }, [user]);

    function handleNewPost(newPost){
        setPosts([newPost, ...posts]);
    }

    if(!user){
        /**
         * By passing the setUser as a prop, we can update the user value from the Login component
         */
        return <Login setUser={setUser} />;
    }

    return (
            <div>
                <Header username={user} setUser={setUser} />
                <CreatePost username={user} handleNewPost={handleNewPost} />
                <PostList posts={posts} />
            </div>
        )
}

export default App;