import { useState, useEffect } from "react";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";
// import axios from "axios";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "../MDBox";
import MDTypography from "../MDTypography";
import MDAvatar from "../MDAvatar/index";

// Material Dashboard 2 PRO React base styles
import breakpoints from "../../assets/theme/base/breakpoints";

// Images
import backgroundImage from "../../assets/images/bg-paddy.jpg";

import Overview from "./Overview";

function Profile({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [user, setUser] = useState(null);
  const [cookie] = useCookies(["token"]);
  const [usercookie] = useCookies(["user"]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  useEffect(async () => {
    // console.log(usercookie);
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }
    /* eslint no-underscore-dangle: 0 */
    const url = `${process.env.REACT_APP_AUTH_BACKEND}/user/get/${usercookie.user._id}`;
    const headers = {
      "X-Auth-Token": cookie.token,
      "content-type": "application/json",
    };
    try {
      await fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
          setUser(data.user);
          setImgUrl(data.user.imageUri);
        })

        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();
    setIsLoading(false);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.0),
              rgba(gradients.info.state, 0.0)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -2,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={5} alignItems="center">
          <Grid item marginLeft={10} marginTop={5}>
            <MDAvatar src={imgUrl} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item marginTop={5}>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {usercookie.user.userFirstName}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {usercookie.user.userType}
              </MDTypography>
            </MDBox>
          </Grid>
          {!isLoading && user ? <Overview p={user} setImgUrl={setImgUrl} /> : null}
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Profile
Profile.defaultProps = {
  children: "",
};

// Typechecking props for the Profile
Profile.propTypes = {
  children: PropTypes.node,
};

export default Profile;
