import React, { useState } from "react";
import axios from "axios";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  // declare new state variables
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  // initialize the variales to empty strings
  const [regUser, setRegUser] = useState({
    name: "",
    userEmail: "",
    password: "",
  });

  const history = useNavigate();
  // the backend connection
  const register = () => {
    // form validation
    if (!regUser.name.trim()) {
      alert("Name is required");
    } else if (
      !regUser.userEmail.trim() ||
      !regUser.userEmail.includes("@") ||
      !regUser.userEmail.endsWith(".com")
    ) {
      alert("Email is required with '@' and '.com' ");
    } else if (regUser.password.trim() < 7) {
      alert("Password is required with minimum of 6 characters");
    } else {
      axios
        .post("http://localhost:3002/user/add/expert", regUser)
        .then(() => {
          alert("Successfuly registered ");
          // user navigation after a successful registration
          history("/authentication/sign-in");
        })
        .catch((res) => {
          alert(res.body);
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

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-2}
          p={2}
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
        <MDBox pt={1} pb={2} px={4}>
          <MDBox component="form" role="form">
            <MDBox mb={1} className={`no-border${firstFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                onFocus={() => setFirstFocus(true)}
                onBlur={() => setFirstFocus(false)}
                name="name"
                value={regUser.name}
                onChange={handleChange}
                fullWidth
                success
              />
            </MDBox>
            <MDBox mb={1} className={`no-border${emailFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="userEmail"
                label="Email"
                variant="standard"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                name="userEmail"
                value={regUser.userEmail}
                onChange={handleChange}
                fullWidth
                success
              />
            </MDBox>
            <MDBox mb={1} className={`no-border${lastFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
                name="password"
                value={regUser.password}
                onChange={handleChange}
                fullWidth
                success
              />
            </MDBox>
            <MDBox mb={1} className={`no-border${lastFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="address"
                label="Address"
                variant="standard"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
                name="address"
                value={regUser.address}
                onChange={handleChange}
                fullWidth
                success
              />
            </MDBox>
            <MDBox mb={1} className={`no-border${lastFocus ? " input-group-focus" : ""}`}>
              <MDInput
                type="phonenumber"
                label="Number"
                variant="standard"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
                name="phonenumber"
                value={regUser.phonenumber}
                onChange={handleChange}
                fullWidth
                success
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="success"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={2}>
              <MDButton onClick={register} variant="gradient" color="success" fullWidth>
                Farmer sign up
              </MDButton>
            </MDBox>
            <MDBox textAlign="center">
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
