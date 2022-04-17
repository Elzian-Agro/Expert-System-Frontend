import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function MySchedulePopup() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">
        <AlertTitle>check it out!</AlertTitle>
        There are no booked schedules. Please go the overall schedule and book the meetings.
      </Alert>
    </Stack>
  );
}
