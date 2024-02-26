import * as Yup from "yup";
export const Schema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  lname: Yup.string().optional("Last Name optional"),
  gender: Yup.string().required(),
  bgroup: Yup.string().required("Blood Group is a required field "),
  dob: Yup.date().required("required field "),
  distric: Yup.string().min(4).required("required field "),
  state: Yup.string().required("required field "),

  ldate: Yup.date().optional(),
  address: Yup.string().required("required field "),
  mobile: Yup.number()
    .min(1000000000, "OPPs Phone Number Not Valid")
    .max(9999999999, "OPPs Phone Number Not Valid")
    .required("Phone number is required"),
});

export const RequestSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  gender: Yup.string().required(),
  bgroup: Yup.string().required("Blood Group is a required field "),
  address: Yup.string().required("required field "),
  mobile: Yup.number()
    .min(1000000000, "OPPs Phone Number Not Valid")
    .max(9999999999, "OPPs Phone Number Not Valid")
    .required("Phone number is required"),
  units: Yup.number().required("Units required"),
  age: Yup.number().required("Age required"),
  rdate: Yup.date().required("required"),
  distric: Yup.string().min(4).required(),
  state: Yup.string().required(),
});
export const SignupSchema = Yup.object({
  name: Yup.string().min(4).required("Please Enter your name"),
  email: Yup.string().required("Please Enter your email"),
  mobile: Yup.number()
    .min(1000000000, "OPPs Phone Number Not Valid")
    .max(9999999999, "OPPs Phone Number Not Valid")
    .required("Phone number is required"),

  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const LoginSchema = Yup.object({
  email: Yup.string().required("Please Enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
