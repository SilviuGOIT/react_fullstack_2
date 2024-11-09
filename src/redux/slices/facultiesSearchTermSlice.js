import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const facultiesSearchTermSlice = createSlice({
  name: "facultiesSearchTerm",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      console.log("state from setSearch", state);
      return action.payload;
    },
  },
});

export const { setSearchTerm } = facultiesSearchTermSlice.actions;
export const facultiesSearchTermReducer = facultiesSearchTermSlice.reducer;
