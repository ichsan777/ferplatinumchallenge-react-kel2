import React from "react";
import SignUpForm from "../components/SignUpForm";
import "./SectionSignUp.css";
import { Link } from "react-router-dom";

const SectionSignUp = () => {
  return (
    <div id="sectionSignIn">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 signInContainer p-5">
            <div className="iconLoginRegister"></div>
            <h2 className="signInTitle">Welcome Back!</h2>
            <SignUpForm />

            <p>
              Already have an account? <Link to="/signin">Sign In here</Link>
            </p>
          </div>
          <div className="col-lg-6 heroSection d-sm-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionSignUp;
