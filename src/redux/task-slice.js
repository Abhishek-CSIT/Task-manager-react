import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskStats: {
    total: 0,
    completed: 0,
    pending: 0,
    urgent: 0,
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: Date.now(),
        status: "pending",
      });
      state.taskStats.total += 1;
      state.taskStats.pending += 1;
      if (action.payload.priority === "high") {
        state.taskStats.urgent += 1;
      }
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        const oldStatus = task.status;
        task.status = action.payload.status;

        if (oldStatus === "pending" && action.payload.status === "completed") {
          state.taskStats.pending -= 1;
          state.taskStats.completed += 1;
        } else if (
          oldStatus === "completed" &&
          action.payload.status === "pending"
        ) {
          state.taskStats.pending += 1;
          state.taskStats.completed -= 1;
        }
      }
    },

    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        const task = state.tasks[taskIndex];
        state.taskStats.total -= 1;
        if (task.status === "pending") {
          state.taskStats.pending -= 1;
        } else if (task.status === "completed") {
          state.taskStats.completed -= 1;
        }
        if (task.priority === "high") {
          state.taskStats.urgent -= 1;
        }
        state.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
