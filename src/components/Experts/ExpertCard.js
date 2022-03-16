import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import MDTypography from "components/MDTypography";

import PropTypes from "prop-types";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: 120,
  maxHeight: 120,
  borderRadius: "50%",
  height: "150px",
});

const ExpertCard = (props) => {
  const { name, description, position, organization, expImage } = props;
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item style={{ width: "550px" }}>
        <Card sx={{ maxWidth: 600, mb: 5, margin: "auto", height: "auto", my: 4 }}>
          <CardContent sx={{ paddingTop: 3 }}>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid item paddingRight={2} justifyContent="center" alignItems="center">
                <Img
                  alt="Expert Profile"
                  // setting a default image if profile image is null
                  src={
                    expImage != null
                      ? `https://elzian-agro-user-auth.herokuapp.com/uploads/images/${expImage}`
                      : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160"
                  }
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <MDTypography gutterBottom variant="h5" component="div" align="justify">
                      {name}
                    </MDTypography>
                    <MDTypography variant="body2" gutterBottom>
                      {description}
                    </MDTypography>
                  </Grid>
                  <Grid item xs container spacing={2} justifyContent="space-between">
                    <Grid item xs={4}>
                      <MDTypography variant="body2" gutterBottom>
                        <AccountCircleRoundedIcon sx={{ mx: 1 }} />
                        {position}
                      </MDTypography>
                    </Grid>
                    <Grid item xs={8}>
                      <MDTypography variant="body2" gutterBottom>
                        <CorporateFareRoundedIcon sx={{ mx: 1 }} />
                        {organization}
                      </MDTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

ExpertCard.defaultProps = {
  name: "",
  description: "",
  position: "",
  organization: "",
  expImage: "",
};

ExpertCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
  organization: PropTypes.string,
  expImage: PropTypes.string,
};

export default ExpertCard;
