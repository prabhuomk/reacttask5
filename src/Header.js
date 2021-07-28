import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import Badge from "@material-ui/core/Badge";
export function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>PK's Dashboard</h2>
        <div className="icons">
          <div className="poll">
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <div className="poll">
            <SettingsIcon />
          </div>
          <div className="poll">
            <img
              src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
              alt="not found"
              className="avatar"
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
