import "./EmployeeList.scss";
import Sidebar from "../../Sidebar/Sidebar";
// import api from "../../../dummy api/employeeCreate.json";
import { useState } from "react";
import { UseSelector, useSelector } from "react-redux";

const EmployeeList = () => {
  // ---------------------Handling the api----------------------
  //handeling state data to set in filterData

  const employeeState = useSelector((state) => state.empList);

  //END
  const [searchTerm, setSearchTerm] = useState("");
  const [hiddenSearchTerm, setHiddenSearch] = useState("");
  const [filteredData, setFilteredData] = useState(employeeState);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCompany, setSelectedCompany] = useState("");
  // console.log(filteredData);
  // Calculate the index of the first and last item to display on the current page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePage = (event) => {
    const inputValue = event.target.value;
    // Check if the input is a number between 0 and 100
    if (
      /^\d+$/.test(inputValue) &&
      inputValue >= 1 &&
      inputValue <= employeeState.length
    ) {
      setItemsPerPage(inputValue);
    } else {
      console.log("eee");
    }
  };
  //hidden search to counter Company select
  const handelSelection = () => {
    // Filter data based on the selected company
    const filteredResults = employeeState.filter((item) => {
      return selectedCompany === "" || item.company === selectedCompany;
    });

    setFilteredData(filteredResults);
    setCurrentPage(1);
  };
  //-------------------------------------------
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedCompany(newValue);
  };
  //hidden search to counter Company select
  const handleHiddenSearchfn = (event) => {
    const value = event.target.value.toLowerCase();
    setHiddenSearch(value);

    const filteredResults = employeeState.filter((item) => {
      const values = Object.values(item);
      return values.some((val) => val.toString().toLowerCase().includes(value));
    });

    setFilteredData(filteredResults);
    setCurrentPage(1); // Reset to the first page when searching
  };
  //Search Handel
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredResults = employeeState.filter((item) => {
      const values = Object.values(item);
      return values.some(
        (val) => val && val.toString().toLowerCase().includes(value)
      ); // Check if val is not null or undefined
    });

    setFilteredData(filteredResults);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //Filtering company name to add in select
  const companyArr = employeeState.map((e) => e.company);
  function removeDuplicateStrings(arr) {
    return [...new Set(arr)];
  }

  // Example usage:
  const inputArray = ["apple", "banana", "apple", "cherry", "banana"];
  const filteredArray = removeDuplicateStrings(companyArr);
  // ---------------------End api----------------------
  return (
    <div className="employee-list-container">
      <div className="large-screen-wrapper">
        <Sidebar>
          <h4>Employee List</h4>
          <span>7 of 7 result found.</span>
          <div className="filters">
            <p>company</p>
            <select
              name="company"
              id="company"
              onChange={handleSelectChange}
              value={selectedCompany}
            >
              <option value=""></option>
              {filteredArray.map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
            <button onClick={handelSelection}>Filter</button>
          </div>
          <div className="show-search-container">
            <div className="show-left">
              <span>Show</span>
              <input type="number" value={itemsPerPage} onChange={handlePage} />
              <span>entries</span>
            </div>
            <div className="search-right">
              <span>Search:</span>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <input
                className="d-none"
                type="text"
                placeholder="Search..."
                value={hiddenSearchTerm}
                onChange={handleHiddenSearchfn}
              />
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------------ */}

          {/* ------------------------------------------------------------------------------------------------------------------------------ */}
          <div className="table-container tablet-handel">
            <table className="table">
              <thead style={{ position: "sticky", top: "0px" }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Join Date</th>
                  <th scope="col">Emp#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Email/Mobile</th>
                  <th scope="col">Department</th>
                  <th scope="col">Company</th>
                </tr>
              </thead>
              <tbody>
                {/* ---------Drilling data------------- */}
                {currentItems.map((item, i) => {
                  return (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>
                        <img
                          className="profile-img"
                          src={item.image}
                          alt="profile"
                        />
                      </td>
                      <td>{item.Date}</td>
                      <td>{item.empno}</td>
                      <td>{item.name}</td>
                      <td>{item.gender}</td>
                      <td>{item.role}</td>
                      <td>
                        {item.email} - {item.mobile}
                      </td>
                      <td>{item.department}</td>
                      <td>{item.company}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            {/* Pagination */}
            {filteredData.length > itemsPerPage && (
              <ul className="pagination">
                {Array.from({
                  length: Math.ceil(filteredData.length / itemsPerPage),
                }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default EmployeeList;
