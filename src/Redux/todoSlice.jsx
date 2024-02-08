import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ task: action.payload, status: "Pending" });

      let todoData = JSON.stringify(current(state.todos));
      localStorage.setItem("todos", todoData);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.task === action.payload);
      if (todo) {
        todo.status = "Completed";
      }
      let todoData = JSON.stringify(current(state.todos));
      localStorage.setItem("todos", todoData);
    },
    editTodo: (state, action) => {
        const {index, task} = action.payload;
      const todo = state.todos.find((todo, i) => i === index);
      if (todo) {
        todo.task = task;
      }
      let todoData = JSON.stringify(current(state.todos));
      localStorage.setItem("todos", todoData);
    },
    deleteTodo: (state, action) => {
      let otherstodo = state.todos.filter(
        (todo) => todo.task !== action.payload
      );
      state.todos = otherstodo;

      let todoData = JSON.stringify(otherstodo);
      localStorage.setItem("todos", todoData);
    },
  },
});

export const { addTodo, updateTodo, editTodo, deleteTodo} = todoSlice.actions;
export const selectTodos = (state) => state.todos;
export default todoSlice.reducer;
