import * as React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import { useMaterialUIController } from "context";
import PropTypes from "prop-types";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: 150,
  maxHeight: 170,
  borderRadius: "50%",
});

function ScheduleCard(props) {
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;
  const { profileImg, title, name, meetingId, details, time, date, onBookingSchedule } = props;

  return (
    <Card>
      <CardContent sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Img
              alt="profile"
              // setting a default image if profile image is null
              src={
                profileImg != null
                  ? `https://elzian-user-auth.herokuapp.com/uploads/images/${profileImg}`
                  : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160"
              }
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <MDTypography color="text" fontWeight="light">
                {name}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="light">
                {details}
              </MDTypography>
              <MDTypography color="text" fontWeight="light">
                {date}, {time}
              </MDTypography>
              <CardActions sx={{ justifyContent: "center" }}>
                <MDButton
                  variant="contained"
                  type="submit"
                  color={sidenavColor}
                  onClick={() => onBookingSchedule(meetingId)}
                  sx={{ minWidth: 100 }}
                >
                  Book
                </MDButton>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

ScheduleCard.defaultProps = {
  name: "",
  details: "",
  time: "",
  title: "",
  date: "",
};

ScheduleCard.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default ScheduleCard;
