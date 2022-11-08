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

ReactDOM.render(sayGreeting(), rootNode);

