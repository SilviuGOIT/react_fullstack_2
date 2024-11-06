import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { facultiesReducer } from "./reducers/facultiesReducer";

export const rootReducer = combineReducers({
  faculties: facultiesReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
