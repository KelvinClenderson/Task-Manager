import { CircleChevronRight, Trash } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDeatailsClicked(task) {
    const query = new URLSearchParams();
    query.set("text", task.text);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className=" space-y-4 p-4 bg-slate-400 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className=" flex gap-2">
          <button
            onClick={() => props.onTaskClicked(task.id)}
            className={`bg-sky-800 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.text}
          </button>
          <Button onClick={() => onSeeDeatailsClicked(task)}>
            <CircleChevronRight />
          </Button>

          <Button onClick={() => props.onDeleteTaskClicked(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
