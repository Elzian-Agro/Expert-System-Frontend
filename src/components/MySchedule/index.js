import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { useMaterialUIController } from "context";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import MyScheduleCard from "./scheduleOne";
import MDBox from "../MDBox";
import MySchedulePopup from "./MySchedulePopup";

// MySchedule function
const MySchedule = () => {
  const [controller] = useMaterialUIController();
  const { searchKeyword } = controller;
  const [count, setCount] = useState(4);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const keyword = searchKeyword.toLowerCase().trim();
    setSchedules(
      schedules.filter(
        (schedule) =>
          schedule.MeetingTitle.toLowerCase().includes(keyword) ||
          schedule.ExpertName.toLowerCase().includes(keyword) ||
          schedule.Description.toLowerCase().includes(keyword)
      )
    );
  }, [searchKeyword]);

  const meetingValidate = () => {
    const current = new Date();
    const todayDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const dates = schedules.map((item) => {
      const dateTime = new Date(item?.Date);
      if (current > dateTime) {
        return item.Date;
      }
      return null;
    });
    if (todayDate < dates) {
      return (
        <Grid item>
          <Grid container justifyContent="center" spacing={2}>
            {schedules.map(
              (schedule, index) =>
                index < count && (
                  /* eslint no-underscore-dangle: 0 */
                  <Grid key={schedule._id} item xs={12} lg={6}>
                    <MyScheduleCard
                      details={schedule.Description}
                      profileImg={schedule.ExpertProfile}
                      title={schedule.MeetingTitle}
                      time={schedule.Time}
                      date={schedule.Date}
                      name={schedule.ExpertName}
                      MeetingLink={schedule.MeetingLink}
                    />
                  </Grid>
                )
            )}
          </Grid>
        </Grid>
      );
    }
    return (
      <>
        <MySchedulePopup />
      </>
    );
  };

  const expiredMeetingValidate = () => {
    const current = new Date();
    const todayDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const dates = schedules.map((item) => {
      const dateTime = new Date(item?.Date);
      if (current > dateTime) {
        return item.Date;
      }
      return null;
    });
    if (todayDate > dates) {
      return (
        <Grid item>
          <Grid container justifyContent="center" spacing={2}>
            {schedules.map(
              (schedule, index) =>
                index < count && (
                  /* eslint no-underscore-dangle: 0 */
                  <Grid key={schedule._id} item xs={12} lg={6}>
                    <MyScheduleCard
                      details={schedule.Description}
                      profileImg={schedule.ExpertProfile}
                      title={schedule.MeetingTitle}
                      time={schedule.Time}
                      date={schedule.Date}
                      name={schedule.ExpertName}
                      MeetingLink={schedule.MeetingLink}
                    />
                  </Grid>
                )
            )}
          </Grid>
        </Grid>
      );
    }
    return (
      <>
        <MySchedulePopup />
      </>
    );
  };

  const show = () => {
    setCount(count + 2);
  };
  const [cookies] = useCookies(["token"]);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    "x-auth-token": cookies.token,
  };
  // Intergrate with Backend
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_EXPERT_BACKEND}/schedule/booked`).then((response) => {
      setSchedules(response.data);
    });
  }, []);

  return (
    <>
      <Grid container direction="column">
        {schedules.length !== 0 ? (
          <MDBox py={3}>
            <Grid container spacing={2}>
              {meetingValidate()}
            </Grid>

            <Grid align="center">
              {count < schedules.length && (
                <Button type="submit" onClick={show} color="primary">
                  show more
                </Button>
              )}
            </Grid>
          </MDBox>
        ) : (
          <MySchedulePopup />
        )}

        <Grid item>
          <Divider className="dividerColor" variant="fullWidth" sx={{ backgroundColor: "Black" }} />
        </Grid>

        <Grid item>
          <Typography variant="h5" mb={4} mt={2} align="center" sx={{ fontWeight: 700 }}>
            Expired Meetings
          </Typography>
        </Grid>

        <Grid item>
          <Grid container justifyContent="center" spacing={2}>
            {expiredMeetingValidate()}
          </Grid>

          <Grid align="center">
            {count < schedules.length && (
              <Button type="submit" onClick={show} color="primary">
                show more
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MySchedule;
