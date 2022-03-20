import React, { useState } from "react";
import { loadCSS } from "fg-loadcss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react-router-dom components
import { Link } from "react-router-dom";

// import { useCookies } from "react-cookie";
// import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/photo-agri1.avif";
import { useAuth } from "../../../auth-context";

function Basic() {
  // declare new state variables
  const [emailFocus, setEmailFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  // initialize the variales to empty strings
  // connection to backend
  const { login, setloginUser, loginUser } = useAuth();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginUser({
      ...loginUser,
      [name]: value,
    });
  };

  return (
    <BasicLayout image={bgImage}>
      <ToastContainer />
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
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={3}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="http://localhost:3002/auth/google"
                variant="body1"
                color="white"
              >
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="http://localhost:3002/auth/microsoft"
                variant="body1"
                color="white"
              >
                <Icon baseClassName="fab" className="fa-microsoft" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="http://localhost:3002/auth/facebook"
                variant="body1"
                color="white"
              >
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="http://localhost:3002/auth/linkedin"
                variant="body1"
                color="white"
              >
                <LinkedInIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2} className={`no-border${emailFocus ? " input-group-focus" : ""}`}>
              <MDInput
                placeholder="Email"
                type="email"
                label="Email"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                name="email"
                value={loginUser.email}
                onChange={handleChange}
                fullWidth
                success
              />
            </MDBox>
            <MDBox mb={2} className={`no-border${lastFocus ? " input-group-focus" : ""}`}>
              <MDInput
                placeholder="Password..."
                type="password"
                onFocus={() => setLastFocus(true)}
                onBlur={() => setLastFocus(false)}
                name="password"
                value={loginUser.password}
                onChange={handleChange}
                label="Password"
                fullWidth
                success
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                fullWidth
                onClick={() => {
                  if (!loginUser.email.trim() || !loginUser.password.trim()) {
                    toast.error("Fill the required fields");
                  } else {
                    login();
                  }
                }}
              >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account? Sign Up{" "}
              </MDTypography>
            </MDBox>
            <MDBox mt={1} mb={1} textAlign="center">
              <MDTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="success"
                fontWeight="medium"
                textGradient
              >
                Expert
              </MDTypography>
              <MDTypography variant="button" color="success" fontWeight="medium" textGradient>
                |
              </MDTypography>
              <MDTypography
                component={Link}
                to="/authentication/farmer-sign-up"
                variant="button"
                color="success"
                fontWeight="medium"
                textGradient
              >
                Farmer
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
