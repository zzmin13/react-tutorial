import React from "react";

function User({username, email}){
    return (
        <div>
            <b>{username}</b><span>({email})</span>
        </div>
    )
}
function UserList({users}){
  return (
      users.map((user) => {
          return <User key={user.id} username={user.username} email={user.email}/>
      })
  )
}

export default UserList;
