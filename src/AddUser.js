import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function AddUser() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [name, SetName] = useState();
  const [pic, SetPic] = useState();
  const [joinyear, SetJoinYear] = useState();
  const adduser = () => {
    setOpen(true);
    fetch("https://60c83c0fafc88600179f6657.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        pic,
        joinyear
      })
    })
      .then((data) => data.json())
      .then((data) => {
        setOpen(true);
        history.push("/listusers");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        label="Enter Name"
        variant="outlined"
        onChange={(event) => SetName(event.target.value)}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter profile Picture"
        variant="outlined"
        onChange={(event) => SetPic(event.target.value)}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter year of join"
        variant="outlined"
        onChange={(event) => SetJoinYear(event.target.value)}
      />
      <br />
      <br />
      <Button onClick={adduser} variant="contained" color="primary">
        Create User
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          successfully Added
        </Alert>
      </Snackbar>
    </div>
  );
}
