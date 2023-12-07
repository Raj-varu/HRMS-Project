// empSlice.js
import { createSlice } from "@reduxjs/toolkit";

//make api call here

//api call end
const initialState = {
  employeeApiData: [
    {
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NSipXUdL2Q4GCakkKRvPvAEwxKCYfoQW4g&usqp=CAU",
      employeeList: {
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
      employeeAward: {
        id: 1,
        name: "Bentley",
        gift: "cash",
        awardName: "Best Performance",
        empno: "1000",
        awardDate: "30/12/2022",
      },
      employeeNotice: {
        id: 1,
        title: "Company Innovation Award Function",
        description:
          "asdfuyyyyyyyyyyyyyyyyyofhhhhhhhhhhhhhhhhh  n diafhpodsfpos",
        status: "active",
        createdOn: "20/02/2023",
      },
    },
  ],
  employeeApiData: [
    {
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NSipXUdL2Q4GCakkKRvPvAEwxKCYfoQW4g&usqp=CAU",
      employeeList: {
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
        "full-name": "Raj Constance",
        "father-name": "Constance",
        "temp-add": "665 Mendota Street",
        "perma-add": "Room 727",
        city: "Łęki Szlacheckie",
        pincode: "97-352",
        Date: "25/12/2022",
      },
      employeeAward: {
        id: 2,
        name: "Raj",
        gift: "cash",
        awardName: "Best Performance",
        empno: "1000",
        awardDate: "30/12/2022",
      },
      employeeNotice: {
        id: 2,
        title: "Company Innovation Award Function",
        description:
          "asdfuyyyyyyyyyyyyyyyyyofhhhhhhhhhhhhhhhhh  n diafhpodsfpos",
        status: "active",
        createdOn: "20/02/2023",
      },
    },
  ],
};

const empSlice = createSlice({
  name: "employeeData",
  initialState,
  reducers: {
    getData(state) {},
    createEmployee(state, payload) {
      //Handel state
      let formattedObj = {
        employeeList: payload.payload,
        employeeAward: {},
        employeeNotice: {},
      };
      state.employeeApiData.push(formattedObj);
    },
    addAwards(state, payload) {
      let formattedObej = {
        employeeList: {},
        employeeAward: payload.payload,
        employeeNotice: {},
      };
      state.employeeApiData.push(formattedObej);
    },
  },
});

export const { getData, addAwards } = empSlice.actions; // Export the `getData` action
export default empSlice.reducer;
