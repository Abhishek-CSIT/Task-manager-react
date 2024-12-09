import { AlertCircle, ArrowLeft, Calendar, Flag, Save, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../../redux/task-slice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
    category: "work",
    color: "#3b82f6",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError("Task Title is Required");
      return;
    }
    dispatch(addTask(formData));
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  justify-between h-16">
            <button
              className="flex items-center text-gray-600 hover:text-gray-800"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back To Dashboard
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Create New task
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 ls:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 rounded-lg flex items-center text-red-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Task Title
              </label>
              <input
                type="text"
                value={formData.title}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter Task Title"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                type="text"
                value={formData.description}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter Task Description"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Due Date
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400 " />
                  </div>

                  <input
                    type="date"
                    className="block w-full pl-10 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.dueDate}
                    onChange={(e) =>
                      setFormData({ ...formData, dueDate: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Priority
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Flag className="h-5 w-5 text-gray-400 " />
                  </div>

                  <select
                    className="block w-full pl-10 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                  >
                    <option value={"low"}>Low Priority</option>
                    <option value={"medium"}>Medium Priority</option>
                    <option value={"high"}>High Priority</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  className="mt-1 block w-full  rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value={"work"}>Work</option>
                  <option value={"personal"}>personal</option>
                  <option value={"shopping"}>Shopping</option>
                  <option value={"health"}>Health</option>
                  <option value={"other"}>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Color Label
                </label>
                <input
                  type="color"
                  value={formData.color}
                  className="mt-1 block w-full h-10 rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className=" flex items-center
                 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                <Save className="h-5 w-5" />
                <span>Save Task</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
