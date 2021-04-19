import React from "react";

function User({id, username, email, onRemove}){
    return (
        <div>
            <b>{username}</b><span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}
function UserList({users, onRemove}){
  return (
      users.map((user) => {
          return <User
          key={user.id}
          id={user.id}
          username={user.username}
          email={user.email}
          onRemove={onRemove}/>
      })
  )
}

export default UserList;
