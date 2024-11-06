import { configureStore } from "@reduxjs/toolkit";
import { facultiesReducer } from "./slices/facultiesSlice";
import { facultiesSearchTermReducer } from "./slices/facultiesSearchTermSlice";
// import { citiesReducer } from "./slices/citiesSlice";
// import { tutorsReducer } from "./slices/tutorsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedCities = persistReducer(persistConfig, citiesReducer);
const persistedFaculties = persistReducer(persistConfig, facultiesReducer);
const persistedFacultiesSearchTerm = persistReducer(
  persistConfig,
  facultiesSearchTermReducer
);
// const persistedTutors = persistReducer(persistConfig, tutorsReducer);

const store = configureStore({
  reducer: {
    // cities: persistedCities,
    faculties: persistedFaculties,
    facultiesSearchTermReducer: persistedFacultiesSearchTerm,
    // tutors: persistedTutors,
  },
});

const persistor = persistStore(store);
export { store, persistor };
