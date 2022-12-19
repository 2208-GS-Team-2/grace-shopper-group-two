import React from "react";
import { Link } from "react-router-dom";
import "./mainPageStyle.css";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const Navbar = ({ user, quantity }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <img src="static/images/logo2-jpg.png" alt="logo" />
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
                <Link className="link-item">About Us</Link>
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

          <div className="login">
            <ul className="list-unstyled">
              <li>
                <Link className="link" to="/createuser">
                  <PersonAddAltTwoToneIcon fontSize={"large"} />
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  <AccountBoxTwoToneIcon fontSize={"large"} />
                </Link>
              </li>
              <li>
                <Link className="link" to="/carts/usercart">
                  <Badge className="badge" badgeContent={quantity}>
                    <ShoppingCartIcon fontSize={"large"} />
                  </Badge>
                  Your bag
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
