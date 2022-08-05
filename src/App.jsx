import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Nav from "./components/Nav";
import News from "./components/News";
import Home from "./components/Home";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import CryptoDetails from "./components/CryptoDetails";

import "./App.scss";
import "./components/Comp.scss";
import Grid from "@mui/material/Grid";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Grid container spacing={1}>
        <Grid item md={2}>
          <Nav />
        </Grid>
        <Grid item md={10}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/news" element={<News />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/cryptos/:coinId" element={<CryptoDetails />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  </div>
);

export default App;
