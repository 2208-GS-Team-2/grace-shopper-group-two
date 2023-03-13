import React from "react";
import { Link } from "react-router-dom";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";
import Logout from "../Logout";
import "./navBarStyle.css";

const Navbar = ({ user, quantity }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
        <Link to="/">
          <img src="static/images/logo2-jpg.png" alt="logo" />
        </Link>  
          <nav className="navbar">
            <ul className="list-unstyled">
              <li>
                <Link className="link-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link-item" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="link-item" to="/about" style={{whiteSpace: "nowrap"}}>
                  About Us
                </Link>
              </li>
              <li>
                {user.isAdmin && (
                  <Link className="link-item" to="/allUsers">
                    All Active Users
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="right-navbar">
            <ul className="list-unstyled-right-navbar">
              <li>
                <Link className="link" to="/createuser">
                  <PersonAddAltTwoToneIcon fontSize={"large"} />
                  <Button sx={{textTransform: "none", whiteSpace: "nowrap" }}> Sign Up</Button>
                </Link>
              </li>
              {!user.id ? (
                <li>
                  <Link className="link" to="/login">
                    <AccountBoxTwoToneIcon fontSize={"large"} />
                    <Button sx={{ textTransform: "none" }}>Login</Button>
                  </Link>
                </li>
              ) : (
                <li>
                  <Logout />
                </li>
              )}
              <li>
                <Link className="link" to="/carts/usercart">
                  <Badge className="badge" badgeContent={quantity}>
                    <ShoppingCartIcon fontSize={"large"} />
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
