import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useMaterialUIController } from "context";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import MDBox from "../MDBox";
import ExpertCard from "./ExpertCard";

const ExpertProfile = () => {
  const [controller] = useMaterialUIController();
  const { searchKeyword } = controller;
  // Storing expert data
  const [cookies] = useCookies(["token"]);
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [noResult, setNoResult] = useState(false);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    "x-auth-token": cookies.token,
  };

  // Retrieving data from Backend
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_AUTH_BACKEND}/user/getExperts`).then((response) => {
      setData(response.data);
      setSearchResult(response.data);
    });
  }, []);

  useEffect(() => {
    const keyword = searchKeyword.toLowerCase().trim();
    if (keyword !== "") {
      const filtered = data.filter((expcard) =>
        expcard.userFirstName.toLowerCase().includes(keyword)
      );

      // update the state with filtered data
      setSearchResult(filtered);

      // set state if no results there
      setTimeout(() => {
        if (filtered.length === 0) {
          setNoResult(true);
        }
      }, 2000);
    }
  }, [searchKeyword]);

  return (
    <MDBox>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          {searchResult.map((expcard) => (
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
      <div align="center">
        {noResult && (
          <Alert sx={{ margin: 5 }} severity="info">
            No Results found for <b>&#39;{searchKeyword}&#39;</b>
          </Alert>
        )}
      </div>
    </MDBox>
  );
};

export default ExpertProfile;
