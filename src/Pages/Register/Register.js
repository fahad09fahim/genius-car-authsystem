import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const negivateLogin = () => {
    navigate("/login");
  };
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register-form">
      <h3> Please Register</h3>
      <form onSubmit={handleRegister} className="signin-form">
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <br />
        <input className="btn" type="submit" value="register" />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          className="text-decoration-none"
          to="/login"
          onClick={negivateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
