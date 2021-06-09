import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const { id, username, email, active } = user;
  const dispatch = useContext(UserDispatch);

  const onRemove = (id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  };
  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  };
  return (
    <div>
      {console.log(`User 컴포넌트(${username})가 렌더링 되었습니다.`)}
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users }) {
  return users.map((user) => {
    return <User user={user} key={user.id} />;
  });
}

export default React.memo(UserList);
