import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import EventNoteIcon from "@mui/icons-material/EventNote";
import axios from "axios";
import Card from "@mui/material/Card";
import { useCookies } from "react-cookie";
import SuccessDialogBox from "./SuccessDialogBox";

const CraeteSchedule = ({ light }) => {
  const [meetingName, setMeetingName] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [openSuccessDialogBox, setOpenSuccessDialogBox] = useState(false);
  const [cookies] = useCookies(["token"]);

  const paperStyle = {
    padding: "30px 20px",
    minWidth: 300,
    maxWidth: 600,
    width: "auto",
    marginTop: 80,
    marginRight: 20,
    marginLeft: 20,
  };

  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const scheduleFormHandler = async (event) => {
    event.preventDefault();
    const loggedUser = await localStorage.getItem("user");
    const obj = JSON.parse(loggedUser);
    const { _id, userFirstName, imageUri, userType } = obj;

    const data = {
      ExpertID: _id,
      MeetingTitle: meetingName,
      MeetingLink: meetingLink,
      Description: meetingDescription,
      Date: meetingDate,
      Time: meetingTime,
      ExpertName: userFirstName,
      ExpertProfile: imageUri,
      loggedUser,
      userType,
    };

    axios
      .post("http://localhost:5000/schedule/add", data, {
        headers: {
          "x-auth-token": cookies.token,
        },
      })
      .then(() => {
        setOpenSuccessDialogBox(true);
      });
  };

  const cancelHandler = () => {
    setMeetingName("");
    setMeetingLink("");
    setMeetingDescription("");
    setMeetingDate("");
    setMeetingTime("");
  };

  const handleDialogClose = () => {
    setOpenSuccessDialogBox(false);
  };

  return (
    <center>
      <Card elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <EventNoteIcon />
          </Avatar>
          <h2 style={headerStyle} light={light}>
            Create Schedule
          </h2>
        </Grid>
        <form onSubmit={scheduleFormHandler}>
          <Grid container direction="column" spacing={2} sx={{ marginTop: 4 }}>
            <Grid item>
              <TextField
                fullWidth
                label="Meeting Name"
                placeholder="Meeting Name"
                onChange={(event) => setMeetingName(event.target.value)}
                value={meetingName}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Meeting Link"
                placeholder="Meeting Link"
                onChange={(event) => setMeetingLink(event.target.value)}
                value={meetingLink}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                fullWidth
                onChange={(event) => setMeetingDescription(event.target.value)}
                value={meetingDescription}
              />
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between" spacing={1}>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="date"
                    label="Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    onChange={(event) => setMeetingDate(event.target.value)}
                    value={meetingDate}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="time"
                    label="Time"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    fullWidth
                    onChange={(event) => setMeetingTime(event.target.value)}
                    value={meetingTime}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginTop: 2 }} justifyContent="flex-end">
            <Grid item>
              <Button
                variant="contained"
                sx={{ minWidth: 100, backgroundColor: "#e53935", color: "#e0f2f1" }}
                onClick={cancelHandler}
              >
                Clear
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ minWidth: 100, color: "#e0f2f1" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      <SuccessDialogBox
        open={openSuccessDialogBox}
        handleDialogClose={handleDialogClose}
        cancelHandler={cancelHandler}
      />
    </center>
  );
};

CraeteSchedule.defaultProps = {
  light: false,
};
CraeteSchedule.propTypes = {
  light: PropTypes.bool,
};
export default CraeteSchedule;
