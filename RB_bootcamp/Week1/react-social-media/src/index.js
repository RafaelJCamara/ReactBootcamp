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

function App_old_1(){
    let isAuthenticated = false;
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

function App_old_2(){

    /**
     * inputState: this is the value whose changes will be tracked. Corresponds to the first position of the array returned by the useState method.
     * setInputValue: function located in the second position of the array returned by the useState method.
     * The React.useState method is called a React hook.
     * You don't have to limit yourself to only have one useState. You can keep track of several states.
     *  Whenever the state is changed, the app is re-rendered.
     */

    // let value;
    // const inputState = React.useState("asdasd");
    // const [inputState, setInputState] = React.useState("");
    // function handleInputChange(event){
    //     // value = event.target.value;
    //     // console.log(value);
    //     setInputState(event.target.value);
    // }

    // const [language, setLanguage] = React.useState("C#");
    // const [yearsExperience, setYearsExperience] = React.useState(0);

    /**
     * As we have seen before, for every state we wanna manage, we must add another useState.
     * This strategy might be cumbersome, specially when you work on a big project that manages lot of state.
     * For that, you can menage the state using an object, as we are going to do next.
     */

    /**
     * One thing it's important to realise is that state updates are asynchronous, and this can be a problem if we want to rely on our interface as the only source of truth.
     * To avoid this, we can make use of the previous state, in the function we extract from the second postion of the useState.
     */

    /**
     * Sometimes, within our app we want to interact with the ouside world. 
     * Whenever we interact with the ouside world, we say it'a side effect.
     * To do that we must use another kind of hood, which is called a useEffect.
     */

    const [developerInfo, setDeveloperInfo] = React.useState({
        name: "",
        language: "C#",
        yearsExperience: 0,
        isEmployed: false,
    });

    /**
     * The useEffect takes as a parameter a callback to be executed.
     * The problem with the location of this useEffect is that it will run whenever the app is re-rendered, meaning when events that have nothing to do with it occur.
     * This might be costy, because the operations we can execute inside the useEffect might be very expensive.
     * To avoid this problem, what we do is use an array argument inside the useEffect function. This array is called as dependencies argument.
     * What is inside the dependencies argument is what changes will trigger the execution the useEffect.
     * The useEffect function will run two times: when we mount the component or unmount it.
     */
    React.useEffect(() => {
        //interaction with the outside world
        document.title = developerInfo.name;
        console.log(developerInfo.name);

        /**
         * Whenever we add event listener here, we must remove them, otherwise we will get erros that will point to memory leaks.
         * As an example of this, we have the creation of an event listener that tracks movements of X and Y axis.
         * If we move from page 1 to page 2, that listener will still exist, thus we must remove it on the return function below.
         */
        // return () =>{
        //     //remove active event listeners
        // }

    }, [developerInfo.name]);

    function handleChangeLanguage(){
        setDeveloperInfo({
            language: "javascript",
            yearsExperience: 0
        })
    }

    function handleChangeYearsOfExperience(event) {
        setDeveloperInfo({
            ...developerInfo,
            yearsExperience: event.target.value
        })
    }

    function handleChangeExploymentStatus(){
        setDeveloperInfo(prevState =>(
            {
                ...prevState,
                isEmployed: !prevState.isEmployed
            }
        ));
    }

    function handleChangeName(event){
        setDeveloperInfo({
            ...developerInfo,
            name: event.target.value
        })
    }

    return (
        <div>
            <button onClick={handleChangeLanguage}>Change language</button>
            <><input type="number" placeholder='numberYears' onChange={handleChangeYearsOfExperience} /></>
            <><input type="text" placeholder='titleName' onChange={handleChangeName} /></>
            <button onClick={handleChangeExploymentStatus}>Toggle Employment</button>
            <p>Learning {developerInfo.language}!!!</p>
            <p>I have {developerInfo.yearsExperience} years of experience.</p>
            <p>I'm currently {developerInfo.isEmployed? "Employed" : "Unemployed"}</p>
        </div>
    );
}

const endpoint = "https://api.github.com/users/";
function App(){

    const [user, setUser] = React.useState(null);
    const [username, setUsername] = React.useState("RafaelJCamara");
    const searchInput = React.useRef();

    async function getUser(route){
        const response = await fetch(`${endpoint}${route}`);
        const data = await response.json();
        setUser(data);
     }

    React.useEffect(()  => {
         getUser(username);
    }
    , []);

    function handleOnSearch(){
         getUser(username);
    }

    function handleOnClear(){
        searchInput.current.value = "";
        searchInput.current.focus();
    }

    return (
        <div>
            <input type="text" placeholder='Github username' onChange={event => setUsername(event.target.value)} ref={searchInput} />
            <button onClick={handleOnSearch}>Search</button>
            <button onClick={handleOnClear}>Clear</button>
            {
                user? (
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.bio}</p>
                        <img alt="avatar" src={user.avatar_url} style={{ height: 50 }} />
                    </div>
                ) : <p>Loading</p>
            }
        </div>
    );
}

// ReactDOM.render(sayGreeting(), rootNode);
ReactDOM.render(<App />, rootNode);
