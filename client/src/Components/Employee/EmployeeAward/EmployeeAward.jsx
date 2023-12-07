import "./EmployeeAward.scss";
import Sidebar from "../../Sidebar/Sidebar";
// import api from "../../../dummy api/employeeCreate.json";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { addAwards } from "../../../store/empSlice";
const EmployeeList = () => {
  //useing store
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employeeData.employeeApiData);
  const awardList = data.map((e) => e.employeeAward);
  // ---------------------Handling the api----------------------
  const [searchTerm, setSearchTerm] = useState("");
  const [hiddenSearchTerm, setHiddenSearch] = useState("");
  const [filteredData, setFilteredData] = useState(awardList);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleUpdateModel, setToggleUpdateModel] = useState(false);
  // console.log(filteredData);
  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  //form handeling
  const { register, handleSubmit } = useForm();

  const handlePage = (event) => {
    const inputValue = event.target.value;
    // Check if the input is a number between 0 and 100
    if (
      /^\d+$/.test(inputValue) &&
      inputValue >= 1 &&
      inputValue <= awardList.length
    ) {
      setItemsPerPage(inputValue);
    } else {
      console.log("eee");
    }
  };
  //hidden search to counter Company select
  const handelSelection = () => {
    // Filter data based on the selected company
    const filteredResults = awardList.filter((item) => {
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

    const filteredResults = awardList.filter((item) => {
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

    const filteredResults = awardList.filter((item) => {
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
  const companyArr = awardList.map((e) => e.company);
  function removeDuplicateStrings(arr) {
    return [...new Set(arr)];
  }

  // Example usage:
  const inputArray = ["apple", "banana", "apple", "cherry", "banana"];
  const filteredArray = removeDuplicateStrings(companyArr);
  // ---------------------End awardList----------------------
  const modelToggle = (which) => {
    setToggleModel(!toggleModel);
  };

  //handeling form data
  const onSubmit = (Data) => {
    console.log(Data);
    dispatch(addAwards(Data));
    setFilteredData(awardList);
  };

  return (
    <div className="employee-list-container">
      <div className="large-screen-wrapper">
        <Sidebar>
          <div className={`model-container${toggleModel ? "d-none" : ""}`}>
            <div className={`model-form${toggleModel ? "d-none" : ""}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className={toggleModel ? "d-none" : ""}>
                  Enter Employee Name
                </h4>
                <input
                  {...register("name")}
                  className={toggleModel ? "d-none" : ""}
                  type="text"
                />
                <h4 className={toggleModel ? "d-none" : ""}>Employee Code</h4>
                <input
                  {...register("empno")}
                  className={toggleModel ? "d-none" : ""}
                  type="text"
                />
                <h4 className={toggleModel ? "d-none" : ""}>Award Name</h4>
                <input
                  {...register("awardName")}
                  className={toggleModel ? "d-none" : ""}
                  t
                  type="text"
                />
                <h4 className={toggleModel ? "d-none" : ""}>Gift</h4>
                <input
                  {...register("gift")}
                  className={toggleModel ? "d-none" : ""}
                  type="text"
                />
                <h4 className={toggleModel ? "d-none" : ""}>Date</h4>
                <input
                  {...register("date")}
                  className={toggleModel ? "d-none" : ""}
                  type="date"
                />
                {/* <button className={toggleModel ? "d-none" : ""}>Add</button> */}
                <input className={toggleModel ? "d-none" : ""} type="submit" />
              </form>
              <button
                className={toggleModel ? "d-none" : ""}
                onClick={modelToggle}
              >
                Close
              </button>
            </div>
            {/* //Update model */}
            {/* <section className="model-container">
              <div className={`model-form${toggleUpdateModel ? "d-none" : ""}`}>
                <form>
                  <h4 className={toggleModel ? "d-none" : ""}>
                    Enter Employee Name
                  </h4>
                  <input className={toggleModel ? "d-none" : ""} type="text" />
                  <h4 className={toggleModel ? "d-none" : ""}>Employee Code</h4>
                  <input className={toggleModel ? "d-none" : ""} type="text" />
                  <h4 className={toggleModel ? "d-none" : ""}>Award Name</h4>
                  <input
                    className={toggleModel ? "d-none" : ""}
                    t
                    type="text"
                  />
                  <h4 className={toggleModel ? "d-none" : ""}>Gift</h4>
                  <input className={toggleModel ? "d-none" : ""} type="text" />
                  <h4 className={toggleModel ? "d-none" : ""}>Date</h4>
                  <input className={toggleModel ? "d-none" : ""} type="date" />
                  <button className={toggleModel ? "d-none" : ""}>Add</button>
                </form>
                <button
                  className={toggleModel ? "d-none" : ""}
                  onClick={modelToggle}
                >
                  Close
                </button>
              </div>
            </section> */}
          </div>
          <h4>Award List</h4>
          <span>7 of 7 result found.</span>
          <button onClick={modelToggle} className={`btn btn-primary`}>
            Add Awards
          </button>
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
                  <th scope="col">Employee Name</th>
                  <th scope="col">Emp Code</th>
                  <th scope="col">Award Name</th>
                  <th scope="col">Gift</th>
                  <th scope="col">Award Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* ---------Drilling data------------- */}
                {currentItems.map((item, i) => {
                  return (
                    <tr>
                      <th scope="row">{item.id}</th>

                      <td>{item.name}</td>
                      <td>{item.empno}</td>
                      <td>{item.awardName}</td>
                      <td>{item.gift}</td>
                      <td>{item.awardDate}</td>
                      <td className=" btn-con">
                        <div className="btn-edit">
                          <FiEdit2 />
                        </div>
                        <div className="btn-delete">
                          <AiOutlineDelete />
                        </div>
                      </td>
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
