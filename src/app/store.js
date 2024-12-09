import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/task-slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
