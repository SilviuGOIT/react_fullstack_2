import { configureStore } from "@reduxjs/toolkit";
import { facultiesSearchTermReducer } from "./slices/facultiesSearchTermSlice";
import { facultiesReducer } from "./slices/facultiesSlice";
import { tutorsReducer } from "./slices/tutorsSlice";
import { citiesReducer } from "./slices/citiesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["facultiesSearchTerm"],
};

const persistedCities = persistReducer(persistConfig, citiesReducer);
const persistedFaculties = persistReducer(persistConfig, facultiesReducer);
const persistedFacultiesSearchTerm = persistReducer(
  persistConfig,
  facultiesSearchTermReducer
);
const persistedTutors = persistReducer(persistConfig, tutorsReducer);

const store = configureStore({
  reducer: {
    cities: persistedCities,
    faculties: persistedFaculties,
    facultiesSearchTerm: persistedFacultiesSearchTerm,
    tutors: persistedTutors,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
