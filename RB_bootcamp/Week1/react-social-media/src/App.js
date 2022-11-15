import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './reducer/postreducer';

export const UserContext = React.createContext();
export const PostContext = React.createContext({
    posts: []
});

function App(){
    const [user, setUser] = React.useState('');
    const [posts, setPosts] = React.useState([]);
    const initialPostState = React.useContext(PostContext);
    const [state, dispatch] = React.useReducer(postReducer, initialPostState);

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

            <PostContext.Provider value={{state, dispatch}}>
                <UserContext.Provider value={user}>
                    <Header username={user} setUser={setUser} />
                    <CreatePost username={user} handleNewPost={handleNewPost} />
                    <PostList posts={state.posts} />
                </UserContext.Provider>
            </PostContext.Provider>
        )
}

export default App;