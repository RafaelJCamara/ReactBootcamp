import logo from './logo.svg';
import './App.css';

function CardV1(props){
  return (
    <h1>Hello {props.firstName} {props.lastName}!</h1>
  );
}

/**
 * The props object is a javascript object.
 * So if we send an object, you still destructure things out, and only after that you can access its properties.
 */
function CardV2({user}){
  return (
    <h1>Hello {user.firstName} {user.lastName}, with age {user.age}!</h1>
  );
}

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 31
  },
  {
    firstName: 'Janet',
    lastName: 'Doe',
    age: 32
  }
]

function App() {
  return (
    <div>
      {/* <CardV1 firstName="Rafael" lastName="Câmara" /> */}
      {/* <CardV2 user={user}/> */}
      {
        users.map(user => <CardV2 user={user} />)
      }
    </div>
  );
}

export default App;
