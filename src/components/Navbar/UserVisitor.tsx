import React, { Fragment, MouseEvent } from "react";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

interface IProps {
  currentUser: object;
  handleRegisterMenuOpen: (e: MouseEvent) => void;
  handleProfileMenuOpen: (e: MouseEvent) => void;
  handleLogout: (e: MouseEvent) => void;
}
export default function UserVisitor(props: IProps) {
  const menuId = "primary-search-account-menu";

  return props.currentUser ? (
    <Fragment>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        aria-label="logout of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={props.handleLogout}
      >
        <ExitToAppIcon />
      </IconButton>
    </Fragment>
  ) : (
    <Fragment>
      <MenuItem onClick={props.handleRegisterMenuOpen}>
        <IconButton
          aria-label="register new user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonAddIcon />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={props.handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Fragment>
  );
}
