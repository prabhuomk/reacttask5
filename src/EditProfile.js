import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export function EditProfile() {
  let { id } = useParams();
  const [rec, SetRec] = useState({});
  const history = useHistory();
  const [name, SetName] = useState();
  const [pic, SetPic] = useState();
  const [joinyear, SetJoinYear] = useState();

  useEffect(() => {
    LoadRecipe(id);
  }, []);

  function LoadRecipe(id) {
    fetch(`https://60c83c0fafc88600179f6657.mockapi.io/users/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => SetRec(data));
  }

  const editprofile = () => {
    fetch(`https://60c83c0fafc88600179f6657.mockapi.io/users/${id}`, {
      method: "PUT",
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
        history.push("/listusers");
      });
  };

  return (
    <div>
      {rec.id ? (
        <div className="form">
          <TextField
            id="outlined-basic"
            defaultValue={rec.name}
            label="Enter the name"
            variant="outlined"
            onChange={(event) => SetName(event.target.value)}
          />

          <br />
          <br />

          <TextField
            id="outlined-basic"
            defaultValue={rec.pic}
            label="Enter the pic url"
            variant="outlined"
            onChange={(event) => SetPic(event.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            defaultValue={rec.joinyear}
            label="Enter the yearof join"
            variant="outlined"
            onChange={(event) => SetJoinYear(event.target.value)}
          />
          <br />

          <Button onClick={editprofile} variant="contained" color="primary">
            Edit Profile
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
