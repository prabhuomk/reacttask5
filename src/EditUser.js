import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
export function EditUser() {
  let { id } = useParams();

  const [rec, SetRec] = useState({});
  const history = useHistory();
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
  const deleteuser = () => {
    fetch(`https://60c83c0fafc88600179f6657.mockapi.io/users/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((data) => {
        history.push("/listusers");
      });
  };
  return (
    <div className="userpage">
      <Card
        style={{ width: "300px", margin: "10px", backgroundColor: "#F4ABAA" }}
      >
        <img className="user-avatar" src={rec.pic} alt="notfound" />
        <h4>{rec.name}</h4>
        <span>{rec.joinyear}</span>
        <br />
        <DeleteIcon onClick={deleteuser} style={{ Color: "red" }} />
        <EditIcon onClick={() => history.push(`/editprofile/${id}`)} />
      </Card>
    </div>
  );
}
