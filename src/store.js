import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducer/counterSlice";
import userReducer from "./reducer/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});
