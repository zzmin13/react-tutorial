import React from "react";

const User = React.memo(function User({user, onRemove, onToggle}){
    const {id, username, email, active} = user;
    return (
        <div>
            {console.log(`User 컴포넌트(${username})가 렌더링 되었습니다.`)}
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
});

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

export default React.memo(UserList);
