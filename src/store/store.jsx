import { configureStore } from "@reduxjs/toolkit";
import Data from "./DataSlice";

export default configureStore({
  reducer: {
    data: Data.reducer,
  },
});
