import React from "react";
import SignInForm from "../components/SignInForm";
import "./SectionSignIn.css";
import { Link } from "react-router-dom";

const SectionSignIn = () => {
  return (
    <div id="sectionSignIn">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 signInContainer p-5">
            <div className="iconLoginRegister"></div>
            <h2 className="signInTitle">Welcome Back!</h2>
            <SignInForm />

            <p>
              Don’t have an account? <Link to="/signup">Sign Up for free</Link>
            </p>
          </div>
          <div className="col-lg-6 heroSection d-sm-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionSignIn;
