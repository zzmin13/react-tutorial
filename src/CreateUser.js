import React, { useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./useInputs";

function CreateUser() {
  const nextId = useRef(4);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  };
  return (
    <div>
      {console.log(`CreateUser 컴포넌트가 렌더링 되었습니다.`)}
      <input
        name="username"
        onChange={onChange}
        placeholder="이름"
        value={username}
      />
      <input
        name="email"
        onChange={onChange}
        placeholder="이메일"
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default React.memo(CreateUser);
