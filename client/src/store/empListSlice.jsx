import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  //Dummy  DATA  going to GET API In here
  {
    id: 1,
    name: "Bentley",
    role: "Construction Expeditor",
    email: "bconstance0@google.de",
    gender: "Genderfluid",
    empno: "1000",
    cardno: "2000",
    image: "https://random.imagecdn.app/500/150",
    company: "Divanoodle",
    department: "Training",
    mobile: "2059432286",
    "full-name": "Bentley Constance",
    "father-name": "Constance",
    "temp-add": "665 Mendota Street",
    "perma-add": "Room 727",
    city: "Łęki Szlacheckie",
    pincode: "97-352",
    Date: "25/12/2022",
  },
  {
    id: 2,
    name: "Raj",
    role: "Construction Expeditor",
    email: "bconstance0@google.de",
    gender: "Genderfluid",
    empno: "1000",
    cardno: "2000",
    image: "https://random.imagecdn.app/500/150",
    company: "Divanoodle",
    department: "Training",
    mobile: "2059432286",
    "full-name": "Bentley Constance",
    "father-name": "Constance",
    "temp-add": "665 Mendota Street",
    "perma-add": "Room 727",
    city: "Łęki Szlacheckie",
    pincode: "97-352",
    Date: "25/12/2022",
  },
];

const employeeListSlice = createSlice({
  name: "employeeListSlice",
  initialState,
  reducers: {
    createEmployee(state, action) {
      state.push(action.payload);
    },
  },
});
export const { createEmployee } = employeeListSlice.actions;

export default employeeListSlice.reducer;
