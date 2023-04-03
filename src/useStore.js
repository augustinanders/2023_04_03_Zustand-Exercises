import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  return {
    todos: [
      { name: "this todo-app only adds", id: nanoid() },
      { name: "This list is for deleting", id: nanoid() },
      { name: "delete me", id: nanoid() },
      { name: "Get rid of me", id: nanoid() }
    ],
    addToDo: (name) =>
      set((state) => {
        return { todos: [...state.todos, { name, id: nanoid() }] };
      }),
    deleteToDo: (id) =>
      set((state) => {
        return { todos: state.todos.filter((todo) => todo.id !== id) };
      }),
    checkToDo: (id) =>
      set((state) => {
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
          )
        };
      })
  };
});

export default useStore;
