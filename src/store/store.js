import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../feature/events/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});
