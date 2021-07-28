import "./styles.css";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Switch, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { Data } from "./Data";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";
import { EditProfile } from "./EditProfile";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="component">
        <SideBar />
      </div>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/listusers">
          <Data />
        </Route>
        <Route path="/createusers">
          <AddUser />
        </Route>
        <Route path="/edituser/:id">
          <EditUser />
        </Route>
        <Route path="/editprofile/:id">
          <EditProfile />
        </Route>
      </Switch>
    </div>
  );
}
