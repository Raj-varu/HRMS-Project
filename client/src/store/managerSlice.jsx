import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Dummy DATA  going to GET API In here
  apiData: [
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
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      //   console.log(action.payload);
      state.apiData.push({ employeeList: action.payload });
      console.log(initialState);
      //   state.apiData = action.payload;
    },
  },
});

export const { setApiData } = managerSlice.actions;

export default managerSlice.reducer;
