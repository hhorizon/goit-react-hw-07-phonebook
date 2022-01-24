import { configureStore, createReducer } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contactsApi";
import { contactsActions } from "./contacts";

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
