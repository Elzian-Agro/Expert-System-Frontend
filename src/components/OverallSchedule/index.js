import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MDBox from "../MDBox";
import ScheduleCard from "./ScheduleCard";

const AllSchedule = () => {
  const [cookies] = useCookies(["token"]);
  const [schedules, setSchedules] = useState([]);
  const [cardCount, setCardCount] = useState(6);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    "x-auth-token": cookies.token,
  };

  const getData = () => {
    axios
      .get("https://elzian-agro-expert-system.herokuapp.com/schedule/")
      .then((response) => setSchedules(response.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const bookingSchedule = async (meetingID) => {
    try {
      await axios
        .put(`https://elzian-agro-expert-system.herokuapp.com/schedule/book/${meetingID}`)
        .then((response) => {
          getData();
          toast.success(response.data.status); // success notification
        });
    } catch (e) {
      toast.error("something wrong"); // error notification
    }
  };

  const show = () => {
    setCardCount(cardCount + 2);
  };

  return (
    <MDBox py={3}>
      <ToastContainer />
      <Grid container spacing={2}>
        {schedules.map(
          (schedule, index) =>
            index < cardCount && (
              /* eslint no-underscore-dangle: 0 */
              <Grid key={schedule._id} item xs={12} lg={6}>
                <ScheduleCard
                  profileImg={schedule.ExpertProfile}
                  details={schedule.Description}
                  title={schedule.MeetingTitle}
                  meetingId={schedule.MeetingID}
                  time={schedule.Time}
                  date={schedule.Date}
                  name={schedule.ExpertName}
                  onBookingSchedule={bookingSchedule}
                />
              </Grid>
            )
        )}
      </Grid>
      <div align="center">
        {cardCount < schedules.length && (
          <Button type="submit" onClick={show} color="primary">
            show more
          </Button>
        )}
      </div>
    </MDBox>
  );
};

export default AllSchedule;
