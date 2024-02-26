import React from "react";
import { Button, Form } from "react-bootstrap";
import Forms from "../Components/Formcom";
import { useFormik } from "formik";
import { SignupSchema } from "../Components/Schema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Signup = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        setButtonDisabled(true);

        axios
          .post(`http://localhost:3000/Posts`, values)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        setTimeout(() => {
          setButtonDisabled(false);
          navigate(`/`);
        }, 2000);
        // console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="signup-form">
      <Form noValidate onSubmit={handleSubmit}>
        <Forms
          label="Name"
          type="text"
          name="name"
          value={values.name}
          placeholder="Enter First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.name && errors.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null
          }
        />
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
          label="Mobile"
          type="number"
          name="mobile"
          value={values.mobile}
          placeholder="Enter Your Mobile"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.mobile && errors.mobile ? (
              <p className="form-error">{errors.mobile}</p>
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
        <Forms
          label="Confim Password"
          type="password"
          name="confirm_password"
          value={values.confirm_password}
          placeholder="Enter confim password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.confirm_password && errors.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null
          }
        />
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="success mt-3 "
          className="btn"
          type="submit"
          disabled={isButtonDisabled}
        >
          Sign Up
        </Button>
        <div className="text-center ">
          <p>
            Already member? <Link to="/">Login</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
