import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignInForm.css";

const SignInForm = () => {
  const initialValues = {
    emailCust: "",
    passwordCust: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };
    const datas = {
      email: values.emailCust,
      password: values.passwordCust,
    };
    axios
      .post(`${urlAPI}/customer/auth/login`, datas, config)
      .then(async (res) => {
        const accessToken = res.data.access_token;
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="SigninForm">
      <form id="FormSignIn" onSubmit={handleSubmit}>
        <div className="form group mb-3">
          <label className="form-label" htmlFor="emailSignIn">
            Email
          </label>
          <input id="emailSignIn" className="form-control" type="email" placeholder="Contoh: johndee@gmail.com" name="emailCust" value={values.emailCust} onChange={handleChange} />
        </div>
        <div className="form group mb-3">
          <label className="form-label" htmlFor="passwordlSignIn">
            Password
          </label>
          <input id="passwordlSignIn" className="form-control" type="password" placeholder="6+ karakter" name="passwordCust" value={values.passwordCust} onChange={handleChange} />
        </div>
        <button type="submit" className="signInButton mb-3">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
