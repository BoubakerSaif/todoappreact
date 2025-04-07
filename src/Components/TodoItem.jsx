import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { useState } from "react";
const TodoItem = ({ todo, deleteTask, toggleCompleted, updateTodo }) => {
  const generateRandom = () => {
    return Math.floor(Math.random() * 256);
  };
  const [edited, setEdited] = useState(false);
  const [upTask, setUpTask] = useState(todo.task);
  return (
    <div className=" flex gap-4 items-center ">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleCompleted(todo.id);
        }}
      />

      {edited ? (
        <input
          className=" border-[1px] rounded-md"
          defaultValue={todo.task}
          onChange={(e) => {
            setUpTask(e.target.value);
          }}
        />
      ) : (
        <p
          style={{
            color: `rgb(${generateRandom()}, ${generateRandom()}, ${generateRandom()})`,
          }}
        >
          {todo.task}
        </p>
      )}

      {edited ? (
        <>
          <MdOutlineCancel
            className=" cursor-pointer"
            onClick={() => {
              setEdited(false);
            }}
          />
          <GiConfirmed
            className=" cursor-pointer text-green-500"
            onClick={() => {
              updateTodo(todo.id, upTask);
              setEdited(false);
            }}
          />
        </>
      ) : (
        <FaEdit
          className=" cursor-pointer text-yellow-500"
          onClick={() => {
            setEdited(true);
          }}
        />
      )}
      {!edited && (
        <MdDeleteForever
          className="text-xl text-red-500 cursor-pointer"
          onClick={() => {
            deleteTask(todo.id);
          }}
        />
      )}
    </div>
  );
};

export default TodoItem;
