import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// material UI components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Phone, LocationOn, PublicSharp, EmailRounded } from "@mui/icons-material";

function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6rm6yln", "template_ancrhve", e.target, "user_4SHlIofMmiUhcdwAj8uJh")
      .then(
        (result) => {
          // console.log(result.text);
          toast.success(result.text);
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Grid container spacing={3}>
        <ToastContainer />
        {/* contact form  */}
        <Grid item xs={12} md={7}>
          <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", marginTop: 50 }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
              </Typography>
              <br />

              <form onSubmit={sendEmail}>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="firstname"
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="lastname"
                    />
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      placeholder="Subject"
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      required
                      name="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                      name="phonenumber"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                      name="message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ color: "#e0f2f1" }}
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* contact information */}
        <Grid item xs={12} md={5}>
          <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", marginTop: 50 }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Information
              </Typography>
              <br />

              <Grid container rowSpacing={2}>
                <Grid xs={12} item container>
                  <Grid item xs={2}>
                    <LocationOn />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">
                      Elzian Ago (pvt) Ltd,
                      <br />
                      New Shopping Complex,
                      <br />
                      Kurunegala,
                      <br />
                      Sri Lanka,
                      <br />
                      60000
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={12} item container>
                  <Grid item xs={2}>
                    <Phone />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">
                      <a href="tel:+94768937675">(+94) 76 893 7675</a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={12} item container>
                  <Grid item xs={2}>
                    <EmailRounded />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">
                      <a href="mailto:contact@elzian.com?subject=Experts%20Query">
                        contact@elzian.com
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={12} item container>
                  <Grid item xs={2}>
                    <PublicSharp />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">
                      <a href="https://agro.elzian.com" target="_blank" rel="noopener noreferrer">
                        www.agro.elzian.com
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
