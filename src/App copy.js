import React, { useReducer, useMemo, createContext } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}
const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    default:
      throw new Error("Unhandled action");
  }
};

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count} </div>
    </UserDispatch.Provider>
  );
}

export default App;
