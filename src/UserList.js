import React from "react";

function User({id, username, email, onRemove, active, onToggle}){
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
          key={user.id}
          id={user.id}
          username={user.username}
          email={user.email}
          onRemove={onRemove}
          active={user.active}
          onToggle={onToggle}
          />
      })
  )
}

export default UserList;
