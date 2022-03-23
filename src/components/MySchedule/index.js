import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MyScheduleCard from "./scheduleOne";
import MDBox from "../MDBox";

// MySchedule function
const MySchedule = () => {
  const [count, setCount] = useState(4);
  const [schedules, setSchedules] = useState([]);

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
    axios
      .get(`${process.env.REACT_APP_EXPERT_BACKEND}/schedule/booked`)
      .then((response) => setSchedules(response.data));
  }, []);

  if (schedules === 0) {
    return <div>There are no booked schedules</div>;
  }
  return (
    <>
      <MDBox py={3}>
        <Grid container spacing={2}>
          {schedules.map(
            (schedule, index) =>
              index < count && (
                /* eslint no-underscore-dangle: 0 */
                <Grid key={schedule._id} item xs={12} lg={6}>
                  <MyScheduleCard
                    details={schedule.Description}
                    profileImg={schedule.imageUri}
                    // profileImg={schedule.ExpertProfile}
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

        <Grid align="center">
          {count < schedules.length && (
            <Button type="submit" onClick={show} color="primary">
              show more
            </Button>
          )}
        </Grid>
      </MDBox>
    </>
  );
};

export default MySchedule;
