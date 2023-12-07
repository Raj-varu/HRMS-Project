import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./empSlice";
import managerSlice from "./managerSlice";
import empListSlice from "./empListSlice";
export const store = configureStore({
  reducer: {
    employeeData: employeeSlice,
    globalManager: managerSlice,
    empList: empListSlice,
  },
});
