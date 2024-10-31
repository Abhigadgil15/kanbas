import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="w-50 list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}