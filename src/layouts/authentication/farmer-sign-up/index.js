import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useFormik } from "formik";

// @mui material components
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/photo-agri.avif";

function Cover() {
  // declare new state variables
  const [firstFocus, setFirstFocus] = useState(false);
  const [secondFocus, setSecondFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [qualificationFocus, setQualiFocus] = useState(false);
  const [bioFocus, setBioFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const history = useNavigate();
  // declare validation schema to the form with yup
  const validationSchema = yup.object({
    userFirstName: yup.string("Enter first name").required("First name is required"),
    userLastName: yup.string("Enter last name").required("Last name is required"),
    userGender: yup.string("Enter gender").required("Gender is required"),
    userAge: yup.number().typeError("Age must be a number").positive().required("Age is required"),
    userEmail: yup
      .string("Enter email")
      .email("Email is required with '@' and '.com'")
      .required("Email is required"),
    userPassword: yup
      .string("Enter password")
      .min(6, "Must be 6 characters")
      .required("Password is required"),
    userAddress: yup.string("Enter address").required("Address is required"),
    userQulifications: yup.string("Enter qulification").required("Qulification is required"),
    userBio: yup.string("Enter bio").required("Bio is required"),
    userPhone: yup
      .number()
      .typeError("Phone must be a number")
      .positive()
      .required("Phone number is required")
      // eslint-disable-next-line prettier/prettier
      .test("len", "Must be exactly 10 numbers", (val) => val.toString().length === 9),
  });
  // formik declaration
  const formik = useFormik({
    // initial form values
    initialValues: {
      userFirstName: "",
      userLastName: "",
      userAge: "",
      userGender: "",
      userEmail: "",
      userPassword: "",
      userPhone: 0,
      userAddress: "",
      userQulifications: "",
      userBio: "",
    },
    // passing declared validation schema to formik
    validationSchema,
    // formik handle submit declaration
    onSubmit: (values) => {
      const data = {
        userFirstName: values.userFirstName,
        userLastName: values.userLastName,
        userAge: values.userAge,
        userGender: values.userGender,
        userEmail: values.userEmail,
        userPassword: values.userPassword,
        userPhone: values.userPhone,
        userAddress: values.userAddress,
        userQulifications: values.userQulifications,
        userBio: values.userBio,
      };
      // the backend connection
      axios
        .post(`${process.env.REACT_APP_AUTH_BACKEND}/user/add`, data)
        .then(() => {
          toast.success("Farmer Successfuly Registered");
          // user navigation after a successful registration
          history("/authentication/sign-in");
        })
        .catch((res) => {
          toast.error(res.body);
        });
    },
  });

  return (
    <CoverLayout image={bgImage}>
      <ToastContainer />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-2}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={4} px={4}>
          <MDBox>
            <form onSubmit={formik.handleSubmit}>
              <MDBox mb={2} className={`no-border${firstFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="text"
                  label="First Name"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                  name="userFirstName"
                  value={formik.values.userFirstName}
                  onChange={formik.handleChange}
                  error={formik.touched.userFirstName && Boolean(formik.errors.userFirstName)}
                  helperText={formik.touched.userFirstName && formik.errors.userFirstName}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${secondFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="text"
                  label="Last Name"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setSecondFocus(true)}
                  onBlur={() => setSecondFocus(false)}
                  name="userLastName"
                  value={formik.values.userLastName}
                  onChange={formik.handleChange}
                  error={formik.touched.userLastName && Boolean(formik.errors.userLastName)}
                  helperText={formik.touched.userLastName && formik.errors.userLastName}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${addressFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="text"
                  label="Address"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setAddressFocus(true)}
                  onBlur={() => setAddressFocus(false)}
                  name="userAddress"
                  value={formik.values.userAddress}
                  onChange={formik.handleChange}
                  error={formik.touched.userAddress && Boolean(formik.errors.userAddress)}
                  helperText={formik.touched.userAddress && formik.errors.userAddress}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${ageFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="text"
                  label="Age"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setAgeFocus(true)}
                  onBlur={() => setAgeFocus(false)}
                  name="userAge"
                  value={formik.values.userAge}
                  onChange={formik.handleChange}
                  error={formik.touched.userAge && Boolean(formik.errors.userAge)}
                  helperText={formik.touched.userAge && formik.errors.userAge}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${genderFocus ? " input-group-focus" : ""}`}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="gender-select-label">Gender</InputLabel>
                  <Select
                    variant="standard"
                    id="standard-error-helper-text"
                    name="userGender"
                    value={formik.values.userGender}
                    onChange={formik.handleChange}
                    error={formik.touched.userGender && Boolean(formik.errors.userGender)}
                    helperText={formik.touched.userGender && formik.errors.userGender}
                    label="Gender"
                    labelId="gender-select-label"
                    onFocus={() => setGenderFocus(true)}
                    onBlur={() => setGenderFocus(false)}
                    fullwidth
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </MDBox>
              <MDBox mb={2} className={`no-border${numberFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  label="Phone Number"
                  type="text"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setNumberFocus(true)}
                  onBlur={() => setNumberFocus(false)}
                  name="userPhone"
                  value={formik.values.userPhone}
                  onChange={formik.handleChange}
                  error={formik.touched.userPhone && Boolean(formik.errors.userPhone)}
                  helperText={formik.touched.userPhone && formik.errors.userPhone}
                  fullWidth
                />
              </MDBox>
              <MDBox
                mb={2}
                className={`no-border${qualificationFocus ? " input-group-focus" : ""}`}
              >
                <MDInput
                  type="text"
                  label="Qulifications"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setQualiFocus(true)}
                  onBlur={() => setQualiFocus(false)}
                  name="userQulifications"
                  value={formik.values.userQulifications}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userQulifications && Boolean(formik.errors.userQulifications)
                  }
                  helperText={formik.touched.userQulifications && formik.errors.userQulifications}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${bioFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="text"
                  label="Bio"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setBioFocus(true)}
                  onBlur={() => setBioFocus(false)}
                  name="userBio"
                  value={formik.values.userBio}
                  onChange={formik.handleChange}
                  error={formik.touched.userBio && Boolean(formik.errors.userBio)}
                  helperText={formik.touched.userBio && formik.errors.userBio}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${emailFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="userEmail"
                  label="Email"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  name="userEmail"
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  error={formik.touched.userEmail && Boolean(formik.errors.userEmail)}
                  helperText={formik.touched.userEmail && formik.errors.userEmail}
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2} className={`no-border${lastFocus ? " input-group-focus" : ""}`}>
                <MDInput
                  type="password"
                  label="Password"
                  variant="standard"
                  id="standard-error-helper-text"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                  name="userPassword"
                  value={formik.values.userPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.userPassword && Boolean(formik.errors.userPassword)}
                  helperText={formik.touched.userPassword && formik.errors.userPassword}
                  fullWidth
                />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton type="submit" variant="gradient" color="success" fullWidth>
                  Farmer sign up
                </MDButton>
              </MDBox>
            </form>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
