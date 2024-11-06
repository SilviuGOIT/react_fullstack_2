import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Faculty of Math",
    description:
      "Some random description for faculty of mathematics,Some random description for faculty of mathematics,Some random description for faculty of mathematics,Some random description for faculty of mathematics,",
  },
  {
    id: 2,
    name: "Faculty of Physics",
    description:
      "Some random description2 for faculty of Physics,Some random description2 for faculty of Physics,Some random description2 for faculty of Physics,Some random description2 for faculty of Physics",
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
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          ...action.payload,
        };
      });
    },
    deleteFaculty(state, action) {
      return state.filter((element) => element.id !== action.payload);
    },
  },
});

//export la actiuni si la reduceri

export const { addFaculty, editFaculty, deleteFaculty } =
  facultiesSlice.actions;
export const facultiesReducer = facultiesSlice.reducer;
