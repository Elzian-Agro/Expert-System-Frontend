import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import PropTypes from "prop-types";

import { useMaterialUIController } from "context";

// Image style
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: 120,
  maxHeight: 120,
  borderRadius: "50%",
});

// MySchedule card
function MyScheduleCard(props) {
  const { title, name, details, time, date, profileImg } = props;
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;

  return (
    <Card>
      <CardContent sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Img
              alt="Expert"
              src={
                profileImg != null
                  ? `http://localhost:3002/uploads/images/${profileImg}`
                  : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160"
              }
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div" align="justify">
                {title}
              </Typography>
              <MDTypography variant="body2" gutterBottom>
                {details}
              </MDTypography>
              <Grid item xs container spacing={2} justifyContent="space-between">
                <Grid item xs={5}>
                  <MDTypography variant="body2">{name}</MDTypography>
                </Grid>
                <Grid item xs={7}>
                  <MDTypography variant="body2">
                    {time},{date}
                  </MDTypography>
                </Grid>
              </Grid>
              <CardActions sx={{ justifyContent: "center" }}>
                <MDButton
                  href="#"
                  align="center"
                  variant="contained"
                  type="submit"
                  color={sidenavColor}
                  sx={{ minWidth: 100 }}
                >
                  Meeting Link
                </MDButton>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

// DefaultProps and PropTypes
MyScheduleCard.defaultProps = {
  title: "",
  // expImage: "",
  name: "",
  details: "",
  time: "",
  date: "",
};

MyScheduleCard.propTypes = {
  title: PropTypes.string,
  // expImage: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
};

export default MyScheduleCard;
