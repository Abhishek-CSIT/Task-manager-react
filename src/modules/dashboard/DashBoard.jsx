import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  ListTodo,
  PlusCircle,
  User,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskList from "../task/components/TaskList";

const DashBoard = () => {
  const navigate = useNavigate();
  const { taskStats } = useSelector((state) => state.tasks);
  return (
    <div className="min-h-screen bg-gray-50">
      {/*Nav Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ListTodo className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                TaskFlow
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Tasks
              </button>

              <div className="relative ">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome Back User!
              </h1>

              <p className="mt-2 text-gray-600 ">
                Here's An Overview Of Your Tasks
              </p>
            </div>
            <button
              onClick={() => navigate("/create-task")}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <PlusCircle size={20} />
              <span>Add New task</span>
            </button>
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-col-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 ">
                  Total Tasks
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-800">
                  {" "}
                  {taskStats.total}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <ListTodo className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 ">
                  Completed Tasks
                </p>
                <p className="mt-2 text-3xl font-bold text-green-800">
                  {taskStats.completed}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 ">
                  Pending Tasks
                </p>
                <p className="mt-2 text-3xl font-bold text-yellow-600">
                  {taskStats.pending}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-600 ">Urgent Tasks</p>
                <p className="mt-2 text-3xl font-bold text-red-600">
                  {" "}
                  {taskStats.urgent}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 ">Ready to Get Organised</h2>
            <p className="text-blue-100 mb-4">
              Start Managing Your Tasks effectively with our intuitive task
              manager. Create , organise , and track Your tasks all in one
              place.
            </p>
            <button
              onClick={() => navigate("/create-task")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center  space-x-2"
            >
              <PlusCircle size={20} />
              <span>Add Your Tasks</span>
            </button>
          </div>
        </div>
        <TaskList />
      </main>
    </div>
  );
};

export default DashBoard;
