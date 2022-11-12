import React from 'react';

function Login(props){
    const  [username, setUsername] = React.useState('');

    function handleOnSubmit(event){
        event.preventDefault();
        props.setUser(username);
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleOnSubmit}>
                <input placeholder='Input username' onChange={event => setUsername(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;