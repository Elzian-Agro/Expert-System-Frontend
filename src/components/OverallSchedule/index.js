import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useMaterialUIController } from "context";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MDBox from "../MDBox";
import ScheduleCard from "./ScheduleCard";

const AllSchedule = () => {
  const [controller] = useMaterialUIController();
  const { searchKeyword } = controller;

  const [cookies] = useCookies(["token"]);
  const [cardCount, setCardCount] = useState(6);
  const [schedules, setSchedules] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  axios.defaults.headers = {
    "Content-Type": "application/json",
    "x-auth-token": cookies.token,
  };

  const getData = () => {
    axios.get(`${process.env.REACT_APP_EXPERT_BACKEND}/schedule`).then((response) => {
      setSchedules(response.data);
      setSearchResult(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // searching
  useEffect(() => {
    const keyword = searchKeyword.toLowerCase().trim();
    if (keyword !== "") {
      setSearchResult(
        schedules.filter(
          (schedule) =>
            schedule.MeetingTitle.toLowerCase().includes(keyword) ||
            schedule.ExpertName.toLowerCase().includes(keyword) ||
            schedule.Description.toLowerCase().includes(keyword)
        )
      );
    }
  }, [searchKeyword]);

  const bookingSchedule = async (meetingID) => {
    try {
      await axios
        .put(`${process.env.REACT_APP_EXPERT_BACKEND}/schedule/book/${meetingID}`)
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
        {searchResult.map(
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
