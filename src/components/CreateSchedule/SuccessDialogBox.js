import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Avatar from "@mui/material/Avatar";

export default function AlertDialog(props) {
  const { open, handleDialogClose, cancelHandler } = props;
  const navigate = useNavigate();
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <div>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogContent>
          <center>
            <Avatar style={avatarStyle}>
              <CheckCircleOutlineIcon />
            </Avatar>
            <DialogContentText sx={{ marginTop: "1rem" }}>
              Thank you for filling out all the information and all the data added successfully!!!
            </DialogContentText>
          </center>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ color: "#e0f2f1" }}
            onClick={() => {
              handleDialogClose();
              cancelHandler();
            }}
          >
            Add More Schedules
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ color: "#e0f2f1" }}
            onClick={() => {
              handleDialogClose();
              navigate("/overall-schedule");
            }}
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.defaultProps = {
  open: "",
  handleDialogClose: () => console.log("hello"),
  cancelHandler: () => console.log("cancel handler"),
};

AlertDialog.propTypes = {
  open: PropTypes.string,
  handleDialogClose: PropTypes.func,
  cancelHandler: PropTypes.func,
};
