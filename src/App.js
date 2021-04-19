import React, {useState , useRef} from "react";
import "./App.css";
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email : ''
  });
  const {username, email} = inputs;
  const onChange = (event) => {
    const {name, value} = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id : nextId.current,
      username : username,
      email : email
    }
    setUsers([
      ...users,
      user
    ]);
    nextId.current += 1;
    setInputs({
      username: '',
      email: ''
    })
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: false
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);
  
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  
  const onToggle = (id) => {
    setUsers(users.map((user) => user.id === id ? {...user, active: !user.active} : user));
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
