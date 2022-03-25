import * as React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountBox from "@mui/icons-material/AccountBox";
import EventIcon from "@mui/icons-material/Event";

import { useMaterialUIController } from "context";
import PropTypes from "prop-types";

import Expert from "../../assets/images/Expert.png";

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
              src={profileImg != null ? `${profileImg}` : `${Expert}`}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs align="center">
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <MDTypography color="text" fontWeight="light">
                <AccountBox color="black" sx={{ mx: 1 }} />
                {name}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="light">
                {details}
              </MDTypography>
              <Grid item xs container>
                <Grid item xs={7}>
                  <MDTypography color="text" fontWeight="light">
                    <EventIcon color="black" sx={{ mx: 1 }} />
                    {date}
                  </MDTypography>
                </Grid>
                <Grid item xs={5}>
                  <MDTypography color="text" fontWeight="light">
                    <AccessTimeIcon color="black" sx={{ mx: 1 }} />
                    {time}
                  </MDTypography>
                </Grid>
              </Grid>

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
