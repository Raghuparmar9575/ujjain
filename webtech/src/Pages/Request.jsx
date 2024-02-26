import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import Forms, { Selectcom } from "../Components/Formcom";
import { useFormik } from "formik";
import { RequestSchema } from "../Components/Schema";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();
  const initialValues = {
    bgroup: "",
    units: "",
    name: "",
    gender: "",
    age: "",
    mobile: "",
    rdate: "",
    address: "",
    distric: "",
    state: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: RequestSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        axios
          .post(`http://localhost:3000/request`, values)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        toast.success("Request Send Successfully");
        setTimeout(() => {
          navigate(`/Home`);
        }, 4000);
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="container mt-4">
      <ToastContainer position="bottom-center" />

      <Form noValidate onSubmit={handleSubmit}>
        <h4 className="text-center text-danger">Request For Blood</h4>
        <Row className="mb-3">
          <Selectcom
            label="Blood Group"
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
          <Selectcom
            label="Units"
            name="units"
            value={values.units}
            option="Units"
            value1="1"
            value2="2"
            value3="3"
            value4="4"
            value5="5"
            value6="5+"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.units && errors.units ? (
                <p className="form-error">{errors.units}</p>
              ) : null
            }
          />
        </Row>
        <Forms
          label="Patient Name"
          type="text"
          name="name"
          value={values.name}
          placeholder="Enter Frst Name"
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="name"
          id="name"
          error={
            touched.name && errors.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null
          }
        />

        <Row className="mt-3">
          <Selectcom
            label="Gender"
            name="gender"
            option="Gender"
            value1="Male"
            value2="Female"
            value3="other"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.gender && errors.gender ? (
                <p className="form-error">{errors.gender}</p>
              ) : null
            }
          />
          <Forms
            label="Patient Age"
            type="number"
            name="age"
            value={values.age}
            placeholder="Enter Patient Age"
            onChange={handleChange}
            onBlur={handleBlur}
            autocomplete="age"
            id="age"
            error={
              touched.age && errors.age ? (
                <p className="form-error">{errors.age}</p>
              ) : null
            }
          />
        </Row>
        <Row className="mt-3">
          <Forms
            label="Attendee Mobile Number"
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
        <Row className="mt-3">
          <Forms
            label="Required Date"
            type="date"
            name="rdate"
            placeholder="Required Date"
            value={values.rdate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.rdate && errors.rdate ? (
                <p className="form-error">{errors.rdate}</p>
              ) : null
            }
          />
        </Row>
        <Row>
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
        <Row className="mt-3">
          <Forms
            label="Full Address With Hospital and City Name"
            name="address"
            type="location"
            placeholder="Address"
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

        <p className="text-center text-danger mt-4">Terms & Conditions</p>

        <Button variant="danger mb-3 mt-3" className="btn" type="submit">
          Send Request
        </Button>
      </Form>
    </div>
  );
};

export default Request;
