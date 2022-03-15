import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

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
  const [instFocus, setInstFocus] = useState(false);
  const [bioFocus, setBioFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  // error state
  const [inputErr, setInputErr] = useState({
    email: false,
    password: false,
  });

  // initialize the variales to empty strings
  const [regUser, setRegUser] = useState({
    userFirstName: "",
    userLastName: "",
    userAge: "",
    userGender: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
    userAddress: "",
    userQulifications: "",
    userInstituteWork: "",
    userBio: "",
  });

  const history = useNavigate();
  // the backend connection
  const register = () => {
    if (
      !regUser.userFirstName.trim() ||
      !regUser.userLastName.trim() ||
      !regUser.userAddress.trim() ||
      !regUser.userAge.trim() ||
      !regUser.userGender.trim() ||
      !regUser.userPhone.trim() ||
      !regUser.userQulifications.trim() ||
      !regUser.userInstituteWork.trim() ||
      !regUser.userBio.trim() ||
      !regUser.userEmail.trim() ||
      !regUser.userPassword.trim()
    ) {
      toast.error("Fill all the required fields");
    } else if (
      !regUser.userEmail.trim() ||
      !regUser.userEmail.includes("@") ||
      !regUser.userEmail.endsWith(".com")
    ) {
      setInputErr({
        ...inputErr,
        email: true,
      });
    } else if (regUser.userPassword.trim().length < 7) {
      setInputErr({
        ...inputErr,
        password: true,
      });
    } else {
      axios
        .post("http://localhost:3002/user/add/expert", regUser)
        .then(() => {
          toast.success("Successfuly Registered");
          // user navigation after a successful registration
          history("/authentication/sign-in");
        })
        .catch((res) => {
          toast.error(res.body);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegUser({
      ...regUser,
      [name]: value,
    });
  };

  const onAgeChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      setRegUser({
        ...regUser,
        userAge: e.target.value,
      });
    }
  };

  const onPhoneChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      setRegUser({
        ...regUser,
        userPhone: e.target.value,
      });
    }
  };

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
          <MDBox component="form" role="form" noValidate autoComplete="off">
            <MDBox mb={2} className={`no-border${firstFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="text"
                label="First Name"
                variant="standard"
                id="standard-error-helper-text"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
                name="userFirstName"
                value={regUser.userFirstName}
                onChange={handleChange}
                fullWidth
                required
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
                value={regUser.userLastName}
                onChange={handleChange}
                fullWidth
                required
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
                value={regUser.userAddress}
                onChange={handleChange}
                fullWidth
                required
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
                value={regUser.userAge}
                onChange={onAgeChange}
                fullWidth
                required
              />
            </MDBox>
            <MDBox mb={2} className={`no-border${genderFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="text"
                label="Gender"
                variant="standard"
                id="standard-error-helper-text"
                onFocus={() => setGenderFocus(true)}
                onBlur={() => setGenderFocus(false)}
                name="userGender"
                value={regUser.userGender}
                onChange={handleChange}
                fullWidth
                required
              />
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
                value={regUser.userPhone}
                onChange={onPhoneChange}
                fullWidth
                required
              />
            </MDBox>
            <MDBox mb={2} className={`no-border${qualificationFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="text"
                label="Qulifications"
                variant="standard"
                id="standard-error-helper-text"
                onFocus={() => setQualiFocus(true)}
                onBlur={() => setQualiFocus(false)}
                name="userQulifications"
                value={regUser.userQulifications}
                onChange={handleChange}
                fullWidth
                error={false}
                required
              />
            </MDBox>
            <MDBox mb={2} className={`no-border${instFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="text"
                label="Institute Work"
                variant="standard"
                id="standard-error-helper-text"
                onFocus={() => setInstFocus(true)}
                onBlur={() => setInstFocus(false)}
                name="userInstituteWork"
                value={regUser.userInstituteWork}
                onChange={handleChange}
                fullWidth
                required
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
                value={regUser.userBio}
                onChange={handleChange}
                fullWidth
                required
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
                value={regUser.userEmail}
                onChange={handleChange}
                fullWidth
                error={inputErr.email}
                helperText={inputErr.email ? "Email is required with '@' and '.com'" : ""}
                required
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
                value={regUser.userPassword}
                onChange={handleChange}
                fullWidth
                error={inputErr.password}
                helperText={
                  inputErr.password ? "Password is required with minimum of 6 characters" : ""
                }
                required
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={register} variant="gradient" color="success" fullWidth>
                sign up
              </MDButton>
            </MDBox>
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
