import { useState } from "react";
import { nanoid } from "nanoid";
import useStore from "../../useStore";

/*
[ ] In useStore.js replicate todos in a global state
[ ] In useStore.js create a function that adds a todo, call it addTodo
[ ] Import todos and addTodo from useStore
[ ] Replace the useState Hook completely with imported useStore states
Note: You want to keep the useState for controlling your text input
*/

export default function ExerciseOne() {
  /* Keep this useState for controlling your input */
  const [inputValue, setInputValue] = useState("");
  /* Replace this useState */
  /*   const [todos, setTodos] = useState([
    { name: "this todo-app only adds", id: nanoid() }
  ]); */
  const todos = useStore((state) => {
    return state.todos;
  });
  const addToDo = useStore((state) => state.addToDo);
  return (
    <>
      <h2>Exercise 1</h2>
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
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </>
  );
}
