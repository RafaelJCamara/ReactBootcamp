import React from 'react';
import ReactDOM from 'react-dom';

//this is called JSX - meaning Javascript XML
const greetings = <div>Hello React!</div>;
const rootNode = document.getElementById('root');


function sayGreeting(){
    const aBool = true;
    if(aBool){
        return greetings;
    }
    return <div>Hello from somewhere.</div>;
}

function App(){
    let isAuthenticated = true;
    return (
                <>
                    <UserHeader username="rafael" date={new Date()} />
                    {isAuthenticated? <LogoutSection/>: <LoginSection />}
                </>
            );
}

function UserHeader(props){
    return (
                <>
                    <h1>Hello {props.username}!!!</h1>
                    <p>Date: {props.date.getFullYear()} </p>
                </> 
    );
}

function LoginSection(){
    return <button>Login</button>
}

function LogoutSection(){
    return <button>Logout</button>
}

// ReactDOM.render(sayGreeting(), rootNode);
ReactDOM.render(<App />, rootNode);
