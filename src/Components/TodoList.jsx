import { useState } from "react";
import { data } from "../data";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState(data);

  const deleteTask = (id) => {
    setTodos(todos.filter((el) => el.id != id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          todo={el}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
