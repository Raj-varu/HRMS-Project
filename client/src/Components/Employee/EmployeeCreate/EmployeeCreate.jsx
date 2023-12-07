import "./EmployeeCreate.scss";
import Sidebar from "../../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../../store/empListSlice";

const EmployeeCreate = () => {
  const dispatch = useDispatch();

  const [toggleForm, setToggleForm] = useState("form-one");
  const [step, setStep] = useState(1);
  //Profile Image State
  const [selectedFile, setSelectedFile] = useState(null);
  //Form State
  const { register, handleSubmit } = useForm();

  //Need to asign state to send it to back-end
  const onSubmit = (data) => {
    // console.log("data here-------", data);
    dispatch(createEmployee(data));
    //Update State
    // useDispatch(createEmployee(data));
    //Api Handel TODO backend
  };
  return (
    <div className="dashboard-container">
      <Sidebar>
        <div className="dashboard">
          Create employee
          <div className="progress row">
            <div
              onClick={() => {
                setToggleForm("form-one");
                setStep(1);
              }}
              className={`progress-container col-2 ${
                step > 0 ? "bg-success" : ""
              }`}
            >
              <h4>Step 1</h4>
              <p>Basic Details.</p>
            </div>

            <div
              onClick={() => {
                setToggleForm("form-two");
                setStep(2);
              }}
              className={`progress-container col-2 mx-5 ${
                step > 1 ? "bg-success" : ""
              }`}
            >
              <h4>Step 2</h4>
              <p>Education Qualification</p>
            </div>
          </div>
          <div className="responsive-container">
            <div className="container-fluid ">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* ------------------------------------------------------------------------Row 1------------------------------------------------------------------------  */}
                <div
                  className={
                    toggleForm === "form-one" ? "form-one row" : "nodisplay"
                  }
                >
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Emp No</label>
                      <input
                        {...register("empNo")}
                        type="number"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Emp No"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Card No</label>
                      <input
                        {...register("cardNo")}
                        type="number"
                        className="form-control emp-input-text"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Card No"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input
                        {...register("fullName")}
                        type="text"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="random@email.com"
                      />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <label htmlFor="exampleInputEmail1">
                        Present Address
                      </label>
                      <textarea
                        {...register("presentAdd")}
                        class="form-control emp-input-text"
                        id="textAreaExample1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="form-outline">
                      <label htmlFor="exampleInputEmail1">
                        Permanent Address
                      </label>
                      <textarea
                        {...register("permanentAdd")}
                        class="form-control emp-input-text"
                        id="textAreaExample1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">City</label>
                      <select
                        {...register("city")}
                        class="custom-select"
                        id="inputGroupSelect01"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">pincode</label>
                      <input
                        {...register("pincode")}
                        type="number"
                        className="form-control emp-input-text"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Pincode"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company</label>
                      <select
                        {...register("company")}
                        class="custom-select"
                        id="inputGroupSelect01"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------------------------------------Row 1 End------------------------------------------------------------------------  */}
                {/* ------------------------------------------------------------------------Row 2------------------------------------------------------------------------  */}
                <div
                  className={
                    toggleForm === "form-two" ? "form-two row" : "nodisplay"
                  }
                >
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Date</label>
                      <input
                        {...register("date")}
                        type="date"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Date"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Mobile Number</label>
                      <input
                        {...register("mobile")}
                        type="number"
                        className="form-control emp-input-text"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Department</label>
                      <input
                        {...register("department")}
                        type="text"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Department"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company</label>
                      <input
                        {...register("company")}
                        type="text"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Company"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Image</label>
                      <input
                        {...register("file")}
                        type="file"
                        name="uploaded_file"
                        className="form-control emp-input-text"
                        id="profileImg"
                        aria-describedby="emailHelp"
                        placeholder="Image"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                      {selectedFile && (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected File"
                          style={{ maxWidth: "100px" }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-outline">
                      <label htmlFor="exampleInputEmail1">Gender</label>
                      <input
                        {...register("gender")}
                        type="text"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Gender"
                      />
                    </div>
                    <div className="form-outline">
                      <label htmlFor="exampleInputEmail1">Role</label>
                      <input
                        {...register("role")}
                        type="text"
                        className="form-control emp-input-text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Role"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">City</label>
                      <select class="custom-select" id="inputGroupSelect01">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">pincode</label>
                      <input
                        type="number"
                        className="form-control emp-input-text"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Pincode"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company</label>
                      <select class="custom-select" id="inputGroupSelect01">
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <input type="submit" />
                  </div>
                </div>
                {/* ------------------------------------------------------------------------Row 2 End------------------------------------------------------------------------  */}

                {/* ------------------------------------------------------------------------Row 5 End------------------------------------------------------------------------  */}
              </form>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default EmployeeCreate;
