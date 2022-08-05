import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FeedIcon from "@mui/icons-material/Feed";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import "./comp.scss"

const Nav = () => {
  return (
    <div className="nav">
      <List sx={{ width: "100%"}}>
        <ListItem>
          <ListItemAvatar>
            <div className="nav-item-icon">
              <HomeIcon />
            </div>
          </ListItemAvatar>
          <Link
            to="/"
            className="nav-item-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Home" className="nav-item-name" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <div className="nav-item-icon">
              <CatchingPokemonIcon />
            </div>
          </ListItemAvatar>
          <Link
            to="exchanges"
            className="nav-item-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Exchanges" className="nav-item-name" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <div className="nav-item-icon">
              <FeedIcon />
            </div>
          </ListItemAvatar>
          <Link
            to="cryptocurrencies"
            className="nav-item-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText
              primary="Crypto Currencies"
              className="nav-item-name"
            />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <div className="nav-item-icon">
              <MonetizationOnIcon />
            </div>
          </ListItemAvatar>
          <Link
            to="news"
            className="nav-item-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="News" className="nav-item-name" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default Nav;
