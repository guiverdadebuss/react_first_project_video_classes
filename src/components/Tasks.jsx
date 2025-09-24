import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks(props) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`)
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
