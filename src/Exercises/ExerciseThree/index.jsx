import { useState } from "react";
import { nanoid } from "nanoid";
import useStore from "../../useStore";

/*
[ ] In useStore.js create a function that checks a todo, call it checkTodo
[ ] In useStore add another key to every todos object, call it isChecked and set its value to true or false
[ ] Import todos and checkTodo from useStore
[ ] Replace the useState Hook completely with imported useStore states
*/

export default function ExerciseThree() {
  /*   const [todos, setTodos] = useState([
    { name: "Check some todos on this list", id: nanoid(), isChecked: true },
    { name: "check me out", id: nanoid(), isChecked: false },
    { name: "follow doemser", id: nanoid(), isChecked: false }
  ]); */
  const { todos, checkToDo } = useStore();

  return (
    <>
      <h2>Exercise 3</h2>
      <ul>
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
            </li>
          );
        })}
      </ul>
    </>
  );
}
