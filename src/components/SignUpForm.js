import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpForm.css";

const SignUpForm = () => {
  const initialValues = {
    nameCust: "",
    emailCust: "",
    passwordCust: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

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
      role: "Customer",
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
          <label className="form-label" htmlFor="nameSignIn">
            Name
          </label>
          <input id="nameSignIn" name="nameCust" className="form-control" type="text" placeholder="Nama Lengkap" defaultValue={values.nameCust} onChange={handleChange} />
        </div>
        <div className="form group mb-3">
          <label className="form-label" htmlFor="nameSignIn">
            Email
          </label>
          <input id="emailSignIn" name="emailCust" className="form-control" type="email" placeholder="Contoh: johndee@gmail.com" defaultValue={values.emailCust} onChange={handleChange} />
        </div>
        <div className="form group mb-3">
          <label className="form-label" htmlFor="passwordlSignIn">
            Password
          </label>
          <input id="passwordlSignIn" name="passwordCust" className="form-control" type="password" placeholder="6+ karakter" defaultValue={values.passwordCust} onChange={handleChange} />
        </div>
        <button type="submit" className="signInButton mb-3">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
