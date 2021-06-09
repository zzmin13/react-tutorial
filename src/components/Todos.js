import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  const onChange = (event) => {
    const context = event.target.value;
    onChangeInput(context);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </>
  );
};
export default Todos;
