import "./Signup.css";
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      <Navbar />
      <div className="signup-section">
        <div className="signup-image-section mt-5 ms-5">
          <img src="digital lync2.png" alt="backgroundimage" />
        </div>

        <div className="signup-form-section">
          <form className="mt-5 signup-form row">
            <div className="col-sm">
              <div className="mb-3">
                <label htmlFor="hello">Hello👋</label>
                <br />
                <h3>Create new account</h3>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            {/* Section 2-------------------------------------------------- */}
            <div className="col-sm">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Security Question
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
