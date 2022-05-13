/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// @mui material UI components
import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Badge, Avatar } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { withStyles } from "@mui/styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Icon from "@mui/material/Icon";
import axios from "axios";
import { useCookies } from "react-cookie";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MDBox from "../MDBox";

const SmallAvatar = withStyles(() => ({
  root: {
    width: 22,
    height: 22,
  },
}))(Avatar);

export function TransitionsModal(props) {
  const { user, setImgUrl } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ToastContainer />
      <Button onClick={handleOpen}>
        <Icon>edit</Icon>
        edit Profile
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card
            style={{
              maxWidth: 400,
              display: "flex",
              position: "absolute",
              top: "51%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CardContent>
              <Typography id="transition-modal-title" variant="h6" component="h2" paddingTop="25px">
                Fill the form
              </Typography>
              <br />
              <ValidationTextFields user={user} setImgUrl={setImgUrl} />
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}

export function ValidationTextFields(props) {
  const { user, setImgUrl } = props;
  const [firstname, setFirstname] = React.useState(user.userFirstName);
  const [lastname, setLastname] = React.useState(user.userLastName);
  const [phone, setPhone] = React.useState(user.userPhone);
  const [address, setAdress] = React.useState(user.userAddress);
  const [qualification, setQualification] = React.useState(user.userQulifications);
  const [institutework, setInstitutework] = React.useState(user.userInstituteWork);
  const [bio, setBio] = React.useState(user.userBio);
  // upload
  const user1 = {
    userFirstName: firstname,
    userLastName: lastname,
    userPhone: phone,
    userAddress: address,
    userQulifications: qualification,
    userInstituteWork: institutework,
    userBio: bio,
  };
  // reset
  const handleSet = (user2) => {
    setFirstname(user2.userFirstName);
    setLastname(user2.userLastName);
    setPhone(user2.userPhone);
    setAdress(user2.userAddress);
    setQualification(user2.userQulifications);
    setInstitutework(user2.userInstituteWork);
    setBio(user2.userBio);
  };
  return (
    <MDBox
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined"
        label="First Name"
        defaultValue=""
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <TextField
        id="outlined"
        label="Last Name"
        defaultValue=""
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <TextField
        id="outlined-helper-text"
        label="Mobile Number"
        defaultValue=""
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <TextField
        id="outlined-error-helper-text"
        label="Location"
        defaultValue=""
        value={address}
        onChange={(e) => setAdress(e.target.value)}
        required
      />
      <TextField
        variant="outlined"
        id="outlined-error-helper-text"
        label="bio"
        defaultValue=""
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />
      {user.userType !== "Farmer"
        ? [
            <TextField
              id="outlined-helper-text"
              label="Qualification"
              defaultValue=""
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
            />,
            <TextField
              id="outlined-error-helper-text"
              label="Institute"
              defaultValue=""
              value={institutework}
              onChange={(e) => setInstitutework(e.target.value)}
              required
            />,
          ]
        : null}
      <UploadButtons user={user1} onReset={handleSet} setImgUrl={setImgUrl} />
    </MDBox>
  );
}

export function UploadButtons(props) {
  const { user, onReset, setImgUrl } = props;
  const [cookie] = useCookies(["token"]);
  const [usercookie] = useCookies(["user"]);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function handleSubmit() {
    const config = {
      headers: {
        "X-Auth-Token": cookie.token,
        "content-type": "application/json",
      },
    };
    const data = {
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      userPhone: user.userPhone,
      userAddress: user.userAddress,
      userQulifications: user.userQulifications,
      userInstituteWork: user.userInstituteWork,
      userBio: user.userBio,
    };

    axios
      .put(`${process.env.REACT_APP_AUTH_BACKEND}/user/updateAuthUser`, data, config)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res);
        } else {
          toast.error("error");
        }
      });
  }
  // Image function
  function handleSubmitImage() {
    if (selectedFile) {
      const config = {
        headers: {
          "X-Auth-Token": cookie.token,
          "content-type": "multipart/form-data",
        },
      };

      const data = new FormData();
      data.append("photo", selectedFile);

      axios
        .put(`${process.env.REACT_APP_AUTH_BACKEND}/user/uploadAuthUser`, data, config)
        .then((res) => {
          if (res.status === 200) {
            toast.success("success");
            const url = `${process.env.REACT_APP_AUTH_BACKEND}/user/get/`.concat(
              usercookie.user._id
            );
            const data1 = {
              params: {},
              headers: {
                "X-Auth-Token": cookie.token,
                "content-type": "application/json",
              },
            };
            axios.get(url, data1).then((response) => {
              if (response.status === 200) {
                setImgUrl(response.data.user.imageUri);
              }
            });
          } else {
            toast.error("error");
          }
        });
    }
  }
  const handleReset = () => {
    const config = {
      headers: {
        "X-Auth-Token": cookie.token,
        "content-type": "multipart/form-data",
      },
    };
    /* eslint no-underscore-dangle: 0 */
    axios
      .get(`${process.env.REACT_APP_AUTH_BACKEND}/user/get/${usercookie.user._id}`, config) // protected route
      .then((res) => {
        if (res.status === 200) {
          onReset(res.data.user);
        }
      });
  };

  return (
    <Grid>
      <Grid container spacing={1} sx={{ marginTop: 1 }} justifyContent="left">
        <Grid item sx={{ marginLeft: 3, marginRight: 9 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={
              <SmallAvatar>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={changeHandler}
                />
                <label htmlFor="raised-button-file">
                  <PhotoCamera style={{ color: "blue" }} className="badgeStyle" />
                </label>
              </SmallAvatar>
            }
          >
            <label htmlFor="raised-button-file">
              <PhotoCamera style={{ color: "blue" }} className="badgeStyle" />
            </label>
          </Badge>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<CameraAltIcon />}
            sx={{ color: "#e0f2f1" }}
            onClick={() => handleSubmitImage()}
          >
            Save
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ marginTop: 1 }} justifyContent="left">
        <Grid item sx={{ marginRight: 2 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{ color: "#e0f2f1" }}
            onClick={() => handleSubmit()}
          >
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="success"
            variant="contained"
            startIcon={<RestartAltIcon />}
            sx={{ color: "#36483F" }}
            onClick={() => handleReset()}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
