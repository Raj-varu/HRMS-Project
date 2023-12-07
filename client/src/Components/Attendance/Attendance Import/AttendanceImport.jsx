// import React, { useState } from "react";
import "./AttendanceImport.scss";
import Sidebar from "../../Sidebar/Sidebar";
import { IoHome } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";

const AttendanceImport = () => {
  return (
    <div>
      <Sidebar>
        <h4 className="switch-small-screen">Empolyee Imports</h4>
        <div className="dash-nav">
          <h4>Empolyee Imports |</h4>
          <IoHome />
          <BiChevronRight />
          <span>Home</span>
          <BiChevronRight />
          Employee
          <BiChevronRight />
          Employee Imports
        </div>
        <div className="employee-import-container">
          <h4>Employee</h4>
          <span>Import</span>
          <div className="input-container">
            <p>Date (day/month/year)</p>
            <input className="input-text" type="text" />
          </div>
          <div className="input-container">
            <p>Attach Excel</p>
            <button className="btn btn-dark">File</button>
            <input className="file-input input-text" type="text" />
          </div>
          <span>Sample file format.</span>
          <span className="text-danger ms-2 pointer">
            <FaDownload />
            Click Here
          </span>
          <div className="button-container">
            <button className="cancel">Cancel</button>
            <button className="reset">Reset</button>
            <button className="import">Import</button>
          </div>
          {/* testing  */}
          <div className="display-section mt-3"></div>
          {/* Deeeees  */}
        </div>
      </Sidebar>
    </div>
  );
};

export default AttendanceImport;
