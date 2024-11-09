import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Faculty of Math",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Faculty of Physics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const facultiesSlice = createSlice({
  name: "faculties",
  initialState: initialState,
  reducers: {
    addFaculty: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (item) => {
        return {
          payload: {
            id: nanoid(),
            ...item,
          },
        };
      },
    },
    editFaculty(state, action) {
      const serializedState = JSON.parse(JSON.stringify(state));
      console.log("Initial state:", serializedState);
      console.log("Action payload:", action.payload);

      const validState = Array.isArray(serializedState)
        ? serializedState
        : Object.keys(serializedState)
            .filter((key) => !isNaN(key))
            .map((key) => serializedState[key]);

      console.log("Valid state as array:", validState);

      const updatedState = validState.map((item) => {
        console.log("Current item in map:", item);
        if (item.id !== action.payload.id) {
          console.log("Item does not match, returning as is:", item);
          return item;
        }

        console.log("Item matches, updating item:", {
          ...item,
          ...action.payload,
        });

        return {
          ...item,
          ...action.payload,
        };
      });

      console.log("Updated state:", updatedState);
      return updatedState;
    },
    deleteFaculty(state, action) {
      const serializedState = JSON.parse(JSON.stringify(state));

      const validState = Array.isArray(serializedState)
        ? serializedState
        : Object.keys(serializedState)
            .filter((key) => !isNaN(key))
            .map((key) => serializedState[key]);

      return validState.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addFaculty, editFaculty, deleteFaculty } =
  facultiesSlice.actions;
export const facultiesReducer = facultiesSlice.reducer;
