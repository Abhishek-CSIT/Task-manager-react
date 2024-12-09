import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../../../redux/task-slice";
import { Trash2 } from "lucide-react";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Tasks</h2>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow-sm p-6"
            style={{ borderLeft: `4px solid ${task.color}` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={task.status === "completed"}
                  className="h-4 w-4 text-blue-600 roounded border-gray-300"
                  onChange={(e) =>
                    dispatch(
                      updateTask({
                        id: task.id,
                        status: e.target.checked ? "completed" : "pending",
                      })
                    )
                  }
                />
                <div>
                  <h3
                    className={`text-lg font-medium ${
                      task.status === "completed"
                        ? "text-gray-400 line-through"
                        : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{task.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    task.priority === "high"
                      ? "bg-red-100 text-red-800"
                      : task.priority === "medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}
                </span>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            {task.dueDate && (
              <div className="mt-4 text-sm text-gray-600">
                Due : {new Date(task.dueDate).toLocaleDateString()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
