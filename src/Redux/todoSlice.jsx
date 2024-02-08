import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
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
  },
});

export const { addTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos;
export default todoSlice.reducer;
