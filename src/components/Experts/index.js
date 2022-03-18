import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MDBox from "../MDBox";
import ExpertCard from "./ExpertCard";

const ExpertProfile = () => {
  // Storing expert data
  const [cookies] = useCookies(["token"]);
  const [data, setData] = useState([]);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    "x-auth-token": cookies.token,
  };

  // Retrieving data from Backend
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_AUTH_BACKEND}/user/getExperts`)
      .then((response) => setData(response.data));
  }, []);

  return (
    <MDBox>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          {data.map((expcard) => (
            <ExpertCard
              /* eslint no-underscore-dangle: 0 */
              key={expcard._id}
              expImage={expcard.imageUri}
              name={expcard.userFirstName}
              description={expcard.userBio}
              position={expcard.userType}
              organization={expcard.userInstituteWork}
            />
          ))}
        </Grid>
      </Container>
    </MDBox>
  );
};

export default ExpertProfile;
