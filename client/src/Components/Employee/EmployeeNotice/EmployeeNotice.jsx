import "./EmployeeNotice.scss";
import Sidebar from "../../Sidebar/Sidebar";
import { BiChevronRight } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
const EmployeeNotice = () => {
  return (
    <div>
      <Sidebar>
        <div className="dash-nav">
          <h4>Dashboard |</h4>
          <IoHome />
          <BiChevronRight />
          <span>Home</span>
          <BiChevronRight />
          Dashboard
        </div>
        <div className="awards-container">
          <div className="award-list-nav">
            <div>
              <h4>Notice List</h4>
              <span>7 of 7 result found.</span>
            </div>
            <button>Add Award</button>
          </div>

          <div className="filters">
            <div className="input-container">
              <p>Date From</p>
              <input className="input-text" type="text" />
            </div>
            <div className="input-container">
              <p>Date to</p>
              <input className="input-text" type="text" />
            </div>
            <button>Filter</button>
          </div>
          <div className="show-search-container">
            <div className="show-left">
              <span>Show</span>
              <input type="text" placeholder="10" />
              <span>entries</span>
            </div>
            <div className="search-right">
              <span>Search:</span>
              <input type="text" />
            </div>
          </div>
          <div className="table-container">
            <table className="table">
              <thead style={{ position: "sticky", top: "0px" }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created on</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <p>company Innovation Award Function </p>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore iure mollitia atque eveniet assumenda suscipit
                    tenetur id placeat similique. Quae temporibus provident
                    architecto similique distinctio ducimus nostrum et
                    recusandae sunt! Mollitia excepturi tempora cumque repellat
                    perferendis, deserunt libero. Fugiat, nulla? Magnam repellat
                    quas aut modi, vero optio. Tempore qui possimus ab, dolorum
                    ratione numquam odit esse illo modi. Inventore, commodi!
                  </td>
                  <td>Active</td>
                  <td>29/09/2023</td>
                  <td className=" btn-con">
                    <div className="btn-edit">
                      <FiEdit2 />
                    </div>
                    <div className="btn-delete">
                      <AiOutlineDelete />
                    </div>
                  </td>
                </tr>
                {/* dummy data  */}

                {/* dummy data  */}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default EmployeeNotice;
