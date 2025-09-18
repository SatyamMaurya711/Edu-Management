import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <div id="container">
        <div className="header">
          <button
            className={isLogin ? "active-btn" : "hbtn"}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active-btn" : "hbtn"}
            onClick={() => {
              setLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>
        <div id="form-container">
          <h3>Welcome to EduManage</h3>

          {!isLogin ? (
            <input type="text" id="name" placeholder="Name" required />
          ) : null}

          <input
            type="email"
            id="useremail"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <div className="form-btn">
            {isLogin ? (
              <button className="btn">Login</button>
            ) : (
              <button className="btn">SignUp</button>
            )}
          </div>

          {isLogin ? (
            <div className="forgot">
              <p>
                Forgot password? <a href="">Click Here</a>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
