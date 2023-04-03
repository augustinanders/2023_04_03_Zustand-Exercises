import { useState } from "react";
import useStore from "../../useStore";

/*
[ ] import everything you created in useStore and build a todo-app with it
[ ] Todo-App can
    [ ] add
    [ ] delete
    [ ] check
Note: To control your text-input use a useState
*/

export default function ExerciseFour() {
  const { todos, addToDo, deleteToDo, checkToDo } = useStore();
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <h2>Exercise 4</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addToDo(inputValue);
          setInputValue("");
        }}
      >
        <label>
          Todo:
          <input
            required
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <button type="submit">add</button>
      </form>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => {
                  checkToDo(todo.id);
                }}
              />
              <span
                style={{ textDecoration: todo.isChecked && "line-through" }}
              >
                {todo.name}
              </span>
              <button
                type="button"
                onClick={() => {
                  deleteToDo(todo.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
