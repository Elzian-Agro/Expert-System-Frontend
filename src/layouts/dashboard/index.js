import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import axios from "axios";
import { useCookies } from "react-cookie";
import ExpertCard from "../../components/Experts/ExpertCard";
import MeetingCard from "../../components/MySchedule/scheduleOne";

function Dashboard() {
  const checked = true;
  const [cookies] = useCookies(["token"]);
  const [expertsData, setExpertsData] = useState([]);
  const [meetingData, setMeetingData] = useState([]);

  const getExpertData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_AUTH_BACKEND}/user/getExperts`, {
      headers: {
        "x-auth-token": cookies.token,
      },
    });
    // console.log(res.data);
    setExpertsData(res.data);
  };

  const getMeetingsData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_EXPERT_BACKEND}/schedule/booked`, {
      headers: {
        "x-auth-token": cookies.token,
      },
    });
    setMeetingData(res.data);
  };

  useEffect(() => {
    getExpertData();
    getMeetingsData();
  }, []);

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="center">
            <Grid item>
              <center>
                <Zoom in={checked} style={{ transitionDelay: "400ms" }}>
                  <Typography variant="h2">Welcome</Typography>
                </Zoom>
                <Zoom in={checked} style={{ transitionDelay: "550ms" }}>
                  <Typography variant="h4" align="center">
                    Elzian Agro Expert System
                  </Typography>
                </Zoom>
              </center>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider className="dividerColor" variant="fullWidth" sx={{ backgroundColor: "Black" }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center" sx={{ fontWeight: 700 }}>
            Experts
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" spacing={1}>
            {expertsData.slice(0, 4).map((expert) => (
              <Grid
                item
                xs={12}
                sm={10}
                md={10}
                lg={6}
                key={expert.userFirstName.concat(" ").concat(expert.userLastName)}
              >
                <ExpertCard
                  key={expert.userFirstName.concat(" ").concat(expert.userLastName)}
                  name={expert.userFirstName.concat(" ").concat(expert.userLastName)}
                  expImage={expert.imageUri}
                  description={expert.userBio}
                  position={expert.userType}
                  organization={expert.userInstituteWork}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item>
          <Divider className="dividerColor" variant="fullWidth" sx={{ backgroundColor: "Black" }} />
        </Grid>

        <Grid item>
          <Typography variant="h5" align="center" sx={{ fontWeight: 700 }}>
            Meeting Links
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" spacing={2}>
            {meetingData.map((meeting) => (
              <Grid item xs={12} sm={10} md={10} lg={5} key={meeting.MeetingTitle + meeting.Time}>
                <MeetingCard
                  key={meeting.MeetingTitle + meeting.Time}
                  profileImg={meeting.ExpertProfile}
                  title={meeting.MeetingTitle}
                  details={meeting.Description}
                  name={meeting.ExpertName}
                  time={meeting.Time.concat(" ").concat(meeting.Date)}
                  MeetingLink={meeting.MeetingLink}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
