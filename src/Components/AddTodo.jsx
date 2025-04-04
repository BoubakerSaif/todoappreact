import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [text, setText] = useState("");

  const addHandler = () => {
    setTodos([...todos, { id: Math.random(), task: text, completed: false }]);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={text}
        name="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        className="border-2 rounded-md bg-gray-100"
      />
      <button className="bg-yellow-500 px-2 rounded-md" onClick={addHandler}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
