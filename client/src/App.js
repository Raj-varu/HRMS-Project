import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Four from "./Components/404/404";
import Signup from "./Components/Signup/Signup";
import EmployeeCreate from "./Components/Employee/EmployeeCreate/EmployeeCreate";
import Dashboard from "./Components/Dashboard/Dashboard";
import EmployeeList from "./Components/Employee/EmployeeList/EmployeeList";
import EmployeeImports from "./Components/Employee/EmployeeImports/EmployeeImports";
import EmployeeAward from "./Components/Employee/EmployeeAward/EmployeeAward";
import EmployeeNotice from "./Components/Employee/EmployeeNotice/EmployeeNotice";
import AttendanceImport from "./Components/Attendance/Attendance Import/AttendanceImport";
import AbsentsDetails from "./Components/Attendance/Absents Details/AbsentsDetails";
import Test from "./test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-create" element={<EmployeeCreate />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/employee-imports" element={<EmployeeImports />} />
        <Route path="/employee-awards" element={<EmployeeAward />} />
        <Route path="/employee-notice" element={<EmployeeNotice />} />
        <Route path="/attendance-import" element={<AttendanceImport />} />
        <Route path="/absent-details" element={<AbsentsDetails />} />
        <Route path="/test" element={<Test />} />

        <Route path="/*" element={<Four />} />
      </Routes>
    </div>
  );
}

export default App;
