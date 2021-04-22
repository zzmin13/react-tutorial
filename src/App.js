import React, {useState , useRef, useMemo} from "react";
import "./App.css";
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users){
  console.log(`활성 사용자 수를 세는 중...`);
  return users.filter(user => user.active).length;
}
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
  
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
