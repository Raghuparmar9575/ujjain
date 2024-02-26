import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import Forms, { Selectcom } from "../Components/Formcom";
import { useFormik } from "formik";
import { Schema } from "../Components/Schema";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const initialValues = {
    name: "",
    lname: "",
    gender: "",
    bgroup: "",
    dob: "",
    ldate: "",
    mobile: "",
    address: "",
    distric: "",
    state: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Schema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        setButtonDisabled(false);

        axios
          .post(`http://localhost:3000/post`, values)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        toast.success("Thank You For Register");

        setTimeout(() => {
          setButtonDisabled(false);
          navigate(`/Page`);
        }, 3000);
        setButtonDisabled(true);

        // console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="container  mt-3">
      <ToastContainer position="top-center" />

      <Form noValidate onSubmit={handleSubmit}>
        <h4 className="text-center text-danger">Register For Donate Blood</h4>

        <Row className="mb-3">
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
            label=" Last Name"
            type="text"
            name="lname"
            value={values.lname}
            placeholder="Enter First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.lname && errors.lname ? (
                <p className="form-error">{errors.lname}</p>
              ) : null
            }
          />
        </Row>
        <Row className="mb-3">
          <Selectcom
            label="Gender "
            name="gender"
            value={values.gender}
            option="Gender"
            value1="Male"
            value2="Female"
            value3="other"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.gender && errors.gender ? (
                <p className="form-error">{errors.gender}</p>
              ) : null
            }
          />
          <Selectcom
            label="Group"
            name="bgroup"
            value={values.bgroup}
            option="Blood Group"
            value1="A+"
            value2="A-"
            value3="B+"
            value4="B-"
            value5="AB+"
            value6="AB-"
            value7="O+"
            value8="O-"
            value9="A1+"
            value10="A1-"
            value11="A1B+"
            value12="A1B-"
            value13="A2B+"
            value14="A2B-"
            value15="INRA-"
            value16="Don`t Know"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.bgroup && errors.bgroup ? (
                <p className="form-error">{errors.bgroup}</p>
              ) : null
            }
          />
        </Row>
        <Row className="mb-3">
          <Forms
            label="Date Of Birth"
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.dob && errors.dob ? (
                <p className="form-error">{errors.dob}</p>
              ) : null
            }
          />
          <Forms
            label="Last Date of Donate"
            type="date"
            name="ldate"
            value={values.ldate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.ldate && errors.ldate ? (
                <p className="form-error">{errors.ldate}</p>
              ) : null
            }
          />
        </Row>
        <Row className="mb-3">
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
        </Row>
        <Row className="mb-3">
          <Forms
            label="Distric"
            type="text"
            name="distric"
            value={values.distric}
            placeholder="Distric"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.distric && errors.distric ? (
                <p className="form-error">{errors.distric}</p>
              ) : null
            }
          />
          <Forms
            label="State"
            type="text"
            name="state"
            value={values.state}
            placeholder="State"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.state && errors.state ? (
                <p className="form-error">{errors.state}</p>
              ) : null
            }
          />
        </Row>
        <Row className="mb-3">
          <Forms
            label="Full Address (Available)"
            name="address"
            type="location"
            placeholder="City/indore/Bhopal/Ujjain"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.address && errors.address ? (
                <p className="form-error">{errors.address}</p>
              ) : null
            }
          />
        </Row>

        <Button
          variant="warning mt-3"
          className="btn"
          type="submit"
          disabled={isButtonDisabled}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
