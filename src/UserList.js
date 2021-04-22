import React, { useEffect } from "react";

function User({user, onRemove, onToggle}){
    const {id, username, email, active} = user;
    useEffect(() => {
        console.log(`값이 설정됨`);
        console.log(user);
        return () => {
            console.log(`값이 바뀌기 전`);
            console.log(user);
        }
    },[user]);
    return (
        <div>
            <b
            style={{
              color: active ? 'green' : 'black',
              cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >{username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}
function UserList({users, onRemove, onToggle}){
  return (
      users.map((user) => {
          return <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
          />
      })
  )
}

export default UserList;
