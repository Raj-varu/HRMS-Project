import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="login-section">
        <div className="image-section mt-5">
          <img src="digital lync2.png" alt="backgroundimage" />
        </div>

        <div className="login-form-section">
          <form className="mt-5 login-form">
            <div className="mb-3">
              <label htmlFor="hello">Welcome back! 👋</label>
              <br />
              <h3>Login to your account</h3>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Remember me
              </label>
            </div>
            <button type="submit" className="mt-2 button btn btn-primary ">
              <Link className="tempdummynavstyle" to="/dashboard">
                Signin
              </Link>
            </button>
            <Link to={"/forgotpassword"}>Forgot password?</Link>
            <div>
              <label className="me-2" htmlFor="acc">
                Don’t have an account yet?
              </label>
              <Link to={"/signup"}>Sign up for free</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
