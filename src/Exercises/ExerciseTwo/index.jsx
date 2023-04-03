import { useState } from "react";
import { nanoid } from "nanoid";
import useStore from "../../useStore";

/*
[ ] In useStore extend the global todo state with some extra todo-objects
[ ] In useStore.js create a function that deletes a todo, call it deleteTodo
[ ] Import todos and deleteTodo from useStore
[ ] Replace the useState Hook completely with imported useStore states
*/

export default function ExerciseTwo() {
  /*   const [todos, setTodos] = useState([
    { name: "This list is for deleting", id: nanoid() },
    { name: "delete me", id: nanoid() },
    { name: "Get rid of me", id: nanoid() }
  ]); */
  const { todos, deleteToDo } = useStore();
  return (
    <>
      <h2>Exercise 2</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
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
