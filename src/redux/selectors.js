import { createSelector } from "@reduxjs/toolkit";

export const selectTutors = (state) => state.tutors.items;
export const selectTutorsFilter = (state) => state.tutorsFilter.value;
export const selectStatusTutors = (state) => state.tutors.status;
export const selectErrorTutors = (state) => state.tutors.error;

export const selectFilteredTutors = createSelector(
  [selectTutors, selectTutorsFilter],
  (list, searchTerm) => {
    return searchTerm.length > 1
      ? list.filter(
          (el) =>
            el.firstName.toLowerCase().includes(searchTerm) ||
            el.lastName.toLowerCase().includes(searchTerm)
        )
      : list;
  }
);
