//1. 액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "totos/TOGGLE";
const REMOVE = "todos/REMOVE";

//2. 액션 생성 함수 정의
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});

//3. 초기상태와 리듀서 함수 정의
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "방 청소하기",
      done: true,
    },
    {
      id: 2,
      text: "리덕스 공부 완료하기",
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        }),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
