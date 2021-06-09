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
  const onChange = (event) => {
    onChangeInput(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">작성</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
