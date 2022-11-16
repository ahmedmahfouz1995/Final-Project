import { configureStore } from "@reduxjs/toolkit";
import { contextReducer } from "./reducer/contextSlice";
import { ParentReducer } from "./reducer/ParentSlice";
import { TeacherReducer } from "./reducer/TeacherSlice";

export const store = configureStore({
  reducer: {
    context: contextReducer,
    Parentcontx:ParentReducer,
    Teachercontx:TeacherReducer,
  },
});
