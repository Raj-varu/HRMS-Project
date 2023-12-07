import "./Dashboard.scss";
import Sidebar from "../Sidebar/Sidebar";
import { IoHome } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar>
        <div className="dashboard">
          <h4 className="small-screen-dash">Dashboard </h4>
          <div className="dash-nav">
            <h4>Dashboard |</h4>
            <IoHome />
            <BiChevronRight />
            <span>Home</span>
            <BiChevronRight />
            Dashboard
          </div>
          <div className="statics-container">
            <div className="statics-card">
              <div className="statics-inner color-one">
                <h4>Total Employee</h4>
                <h4>7</h4>
                <div className="progressbar"></div>
              </div>
            </div>
            <div className="statics-card">
              <div className="statics-inner color-two">
                <h4>Total Presnet</h4>
                <h4>4</h4>
                <div className="progressbar"></div>
              </div>
            </div>
            <div className="statics-card">
              <div className="statics-inner color-three">
                <h4>Total Absent</h4>
                <h4>3</h4>
                <div className="progressbar"></div>
              </div>
            </div>
          </div>
          {/* above cards end */}
          <h3 className="department">Department Summary</h3>
          <div className="department-container">
            <div className="department-card">
              <div className="department-inner">
                <h4>Accounts</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Dewvelopment</h4>
                <h4>2</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Administration</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
            <div className="department-card">
              <div className="department-inner">
                <h4>Sales</h4>
                <h4>1</h4>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
