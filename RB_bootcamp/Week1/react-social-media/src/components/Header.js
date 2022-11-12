import React from 'react';

function Header(props){
    function onSubmit(event){
        event.preventDefault();
        props.setUser('');
    }
    return (
            <div>
                Welcome back, {props.username}
                <button type='submit' onClick={onSubmit} >Logout</button>    
            </div>
        )
}

export default Header;