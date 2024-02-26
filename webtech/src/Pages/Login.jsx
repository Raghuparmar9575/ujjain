import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Forms from "../Components/Formcom";
import { useFormik } from "formik";
import { LoginSchema } from "../Components/Schema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Posts`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        const NewArry = data.filter((items) => {
          return (
            values.email === items.email && values.password === items.password
          );
        });
        action.resetForm();
        console.log("new data :", NewArry);
        if (NewArry.length > 0) {
          toast.success("LOGIN SUCCESSFULL");
          setTimeout(() => {
            setButtonDisabled(false);
            navigate(`/Home`);
          }, 2000);
          setButtonDisabled(true);

          localStorage.setItem("LoginData", JSON.stringify(NewArry));
        } else {
          toast.error("Invalid Email Or Password");
        }
      },
    });
  return (
    <div className="login-form">
      <ToastContainer position="top-center" />

      <Form noValidate onSubmit={handleSubmit}>
        <Forms
          label="Email"
          type="email"
          name="email"
          value={values.email}
          placeholder="Enter Email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.email && errors.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null
          }
        />

        <Forms
          label="Password"
          type="password"
          name="password"
          value={values.password}
          placeholder="Enter password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.password && errors.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null
          }
        />

        <Button
          variant="success mt-3 "
          className="btn"
          type="submit"
          disabled={isButtonDisabled}
        >
          Login
        </Button>
        <div className="text-center ">
          <p>
            Not a member? <Link to="/Signup">Signup</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
