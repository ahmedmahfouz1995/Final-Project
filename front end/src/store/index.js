import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducer/booksSlice";
import { counterReducer } from "./reducer/counterSlice";
import { contextReducer } from "./reducer/contextSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    booksList: booksReducer,
    context: contextReducer
  },
});
