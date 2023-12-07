import { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";
//icons from react-icons
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";
import { BiSelection } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { BsBoxSeam, BsInboxes } from "react-icons/bs";

const Home = ({ children }) => {
  // Define your menu data
  const menuData = [
    {
      heading: "Employee",
      stateAssociated: "emp",
      functionName: toggleEmp,
      icon: RiContactsLine,
      subMenu: [
        { link: "employee-create", title: "Employee Create" },
        { link: "employee-list", title: "Employee List" },
        { link: "employee-imports", title: "Employee Imports" },
        { link: "employee-awards", title: "Awards List" },
        { link: "employee-notice", title: "Notice List" },
      ],
    },
    {
      heading: "Attendance",
      stateAssociated: "attend",
      functionName: toggleAttend,
      icon: FiBookOpen,
      subMenu: [
        { link: "attendance-import", title: "Attendance Import" },
        { link: "manual-punching", title: "Manual Punching" },
        { link: "leave-application", title: "Leave Application" },
        { link: "absents-details", title: "Absents Details" },
        { link: "attendance-verification", title: "Attendance Verification" },
      ],
    },
    {
      heading: "Payroll",
      stateAssociated: "pay",
      functionName: togglePay,
      icon: FaRupeeSign,
      subMenu: [
        { link: "payslip", title: "Payslip" },
        { link: "salary-setup", title: "Salary Setup" },
        { link: "salary-process", title: "Salary Process" },
        { link: "employee-loan", title: "Employee Loan" },
        { link: "employee-conveyance", title: "Employee Conveyance" },
        { link: "tax-file-upload", title: "Tax File Upload" },
      ],
    },
    {
      heading: "Reports",
      stateAssociated: "report",
      functionName: toggleReport,
      icon: TbReport,
      subMenu: [
        { link: "attendance", title: "Attendance" },
        { link: "payslip-bulk", title: "Payslip Bulk Download" },
        { link: "monthly salary", title: "Monthlty Salary" },
        { link: "yearly-salary", title: "Yearly Salary" },
        { link: "salary-deduction", title: "Salary Deduction Details" },
      ],
    },
    {
      heading: "Job",
      stateAssociated: "job",
      functionName: toggleJob,
      icon: BsBoxSeam,
      subMenu: [
        { link: "candidate-create", title: "Candidate Create" },
        { link: "candidate-list", title: "candidate list" },
        { link: "job-opening", title: "Job Opening List" },
        { link: "job-application", title: "Job Application List" },
        { link: "trainings-list ", title: "Trainings List" },
      ],
    },
    {
      heading: "Masters",
      stateAssociated: "masters",
      functionName: toggleMasters,
      icon: BsInboxes,
      subMenu: [
        { link: "company", title: "Company" },
        { link: "loaction", title: "Loaction" },
        { link: "branch", title: "Branch" },
        { link: "department", title: "Department" },
        { link: "department Assign", title: "Department Assign" },
        { link: "designations", title: "Designations" },
        { link: "conveyance", title: "Conveyance" },
        { link: "leave", title: "Leave" },
        { link: "sources", title: "Sources" },
        { link: "qualifiaction", title: "Qualification" },
        { link: "holidays", title: "Holidays" },
        { link: "city", title: "City" },
      ],
    },
    {
      heading: "App Masters",
      stateAssociated: "appMasters",
      functionName: toggleAppMasters,
      icon: BsBoxSeam,
      subMenu: [
        { link: "add-users", title: "Add Users" },
        { link: "list-users", title: "List of users" },
        { link: "common-settings", title: "Common Setting" },
        { link: "roles", title: "Roles" },
      ],
    },
  ];
  // Initialize the state variables and functions
  const [emp, setEmp] = useState(false);
  const [attend, setAttend] = useState(false);
  const [pay, setPay] = useState(false);
  const [report, setReport] = useState(false);
  const [job, setJob] = useState(false);
  const [masters, setMasters] = useState(false);
  const [appMasters, setAppMasters] = useState(false);
  // Create a mapping object to link stateAssociated strings to state variables and functions
  const stateMapping = {
    emp: { state: emp, toggle: setEmp, icon: BiSelection },
    attend: { state: attend, toggle: setAttend },
    pay: { state: pay, toggle: setPay },
    report: { state: report, toggle: setReport },
    job: { state: job, toggle: setJob },
    masters: { state: masters, toggle: setMasters },
    appMasters: { state: appMasters, toggle: setAppMasters },
  };
  //State toggle function's
  function toggleEmp() {
    setEmp((prev) => !prev);
    console.log("called");
  }
  function toggleAttend() {
    setAttend((prev) => !prev);
  }

  function togglePay() {
    setPay((prev) => !prev);
  }
  function toggleReport() {
    setReport((prev) => !prev);
  }
  function toggleJob() {
    setJob((prev) => !prev);
  }
  function toggleMasters() {
    setMasters((prev) => !prev);
  }
  function toggleAppMasters() {
    setAppMasters((prev) => !prev);
  }
  return (
    <div className="containerz">
      {/*-------------------------------------------------------------------- Hamburger Menu Start Handel-------------------------------------------------------------------------------- */}
      <div className="sidebar-container">
        <img className="company-logo" src="/logo.jpeg" alt="company-logo" />
        <img className="profile-logo" src="/drag2.png" alt="profile-logo" />
        <div className="sidebar-menu">
          {/*------------------------------------------------------------- Hard coded Hamburger DashBoard*-------------------------------------------------------------*/}
          <Link to={"/dashboard"} className="item-container">
            <div className="item-name">
              <HiMiniComputerDesktop size={30} />
              <p className="name-margin">Dashboard</p>
            </div>
          </Link>
          {/* ------------------------------------------------------------- End of Hamburger DashBoard ------------------------------------------------------------- */}
          {/* ------------------------------------------------------- Start of the menu's and Submenu's of Hamburger -------------------------------------------------- */}
          {menuData.map((data) => {
            const IconComponent = data.icon; //Dynamic Icon for react-icon
            return (
              <div className="item-container" key={data.heading}>
                <div
                  onClick={data.functionName}
                  className={`item-name ${
                    stateMapping[data.stateAssociated].state ? "highlight" : ""
                  }`}
                >
                  <IconComponent size={30} />
                  <p className="name-margin">{data.heading}</p>
                  <div className="plus-container">
                    <div
                      className={`x-plus ${
                        stateMapping[data.stateAssociated].state ? "close" : ""
                      }`}
                    ></div>
                    <div className="y-plus"></div>
                  </div>
                </div>
                <div
                  className={`item-submenu-container ${
                    stateMapping[data.stateAssociated].state ? "nothing" : ""
                  }`}
                >
                  {data.subMenu.map((subData) => {
                    return (
                      <Link
                        to={`/${subData.link}`}
                        className="item-submenu"
                        key={subData.link}
                      >
                        <p>{subData.title}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {/* ------------------------------------------------------- Start of the menu's and Submenu's of Hamburger -------------------------------------------------- */}
        </div>
      </div>
      <div className="right-container">
        <div className="hham">
          <Menu right>
            <div className="ham-sidebar-container">
              <div className="handel-icons-logo">
                <img
                  className="company-logo"
                  src="/logo.jpeg"
                  alt="company-logo"
                />
                <img
                  className="profile-logo"
                  src="/drag2.png"
                  alt="profile-logo"
                />
              </div>

              <div className="sidebar-menu">
                {/* item start */}
                <Link to={"/dashboard"} className="item-container">
                  <div className="item-name">
                    <HiMiniComputerDesktop size={30} />
                    <p className="name-margin">Dashboard</p>
                  </div>
                </Link>
                {menuData.map((data) => {
                  const IconComponent = data.icon; //Dynamic Icon for react-icon
                  return (
                    <div className="item-container" key={data.heading}>
                      <div
                        onClick={data.functionName}
                        className={`item-name ${
                          stateMapping[data.stateAssociated].state
                            ? "highlight"
                            : ""
                        }`}
                      >
                        <IconComponent size={30} />
                        <p className="name-margin">{data.heading}</p>
                        <div className="plus-container">
                          <div
                            className={`x-plus ${
                              stateMapping[data.stateAssociated].state
                                ? "close"
                                : ""
                            }`}
                          ></div>
                          <div className="y-plus"></div>
                        </div>
                      </div>
                      <div
                        className={`item-submenu-container ${
                          stateMapping[data.stateAssociated].state
                            ? "nothing"
                            : ""
                        }`}
                      >
                        {data.subMenu.map((subData) => {
                          return (
                            <Link
                              to={`/${subData.link}`}
                              className="item-submenu"
                              key={subData.link}
                            >
                              <p>{subData.title}</p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Menu>
        </div>
        {/*-------------------------------------------------------------------- Hamburger Menu End-------------------------------------------------------------------------------- */}
        {/*--------------------------------------------------------------Entry of Children Components-------------------------------------------------------------------------------- */}
        {children}
      </div>
    </div>
  );
};

export default Home;
