import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

export function Data() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  function loadUsers() {
    fetch("https://60c83c0fafc88600179f6657.mockapi.io/users", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setUsers(result));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <TextField
        label="Search user"
        id="outlined-start-adornment"
        onChange={(event) => setSearch(event.target.value)}
        className="search"
        InputProps={{
          startAdornment: <InputAdornment position="start">🔍</InputAdornment>
        }}
        variant="outlined"
      />
      <div className="user-list">
        {users
          .filter((data) =>
            data.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((data) => (
            <User
              pic={data.pic}
              name={data.name}
              joinyear={data.joinyear}
              id={data.id}
            />
          ))}
      </div>
    </div>
  );
}
function User({ pic, name, joinyear, id }) {
  const history = useHistory();

  return (
    <div className="userpage">
      <Card
        onClick={() => history.push(`/edituser/${id}`)}
        style={{
          width: "300px",
          margin: "10px",

          backgroundColor: "#F4ABAA",
          cursor: "pointer"
        }}
      >
        <img className="user-avatar" src={pic} alt="notfound" />
        <h4>{name}</h4>
        <span>{joinyear}</span>
      </Card>
    </div>
  );
}
