import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
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
    <Card sx={{ maxWidth: 850, mb: 5, margin: "auto", width: "auto", height: "auto", my: 4 }}>
      <CardContent>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item paddingRight={2}>
            <Img
              alt="Expert Profile"
              // setting a default image if profile image is null
              src={
                expImage != null
                  ? `http://localhost:3002/uploads/images/${expImage}`
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
                    {position}
                  </MDTypography>
                </Grid>
                <Grid item xs={8}>
                  <MDTypography variant="body2" gutterBottom>
                    {organization}
                  </MDTypography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
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
