import React from "react";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { millify } from "millify";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import CryptoCurrencies from "./Cryptocurrencies";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const { data, isLoading, error, isError, isSuccess } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;
  // console.log(globalStats);
  // console.log(data);

  return (
    <div className="home">
      {isLoading && <div className="loading">loading...</div>}
      {isError && error.message}
      {isSuccess && (
        <>
          <div className="home-success-first-sec">
            <h1 className="home-global-header">Global Crypto Stats</h1>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <ListItemText
                    primary={millify(globalStats.total)}
                    secondary="Total"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    primary={millify(globalStats.total24hVolume)}
                    secondary="Total 24 Volume"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    primary={millify(globalStats.totalCoins)}
                    secondary="Total Coins"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    primary={millify(globalStats.totalExchanges)}
                    secondary="Total Exchanges"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    primary={millify(globalStats.totalMarketCap)}
                    secondary="Total Market Cap"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText
                    primary={millify(globalStats.totalMarkets)}
                    secondary="Total Markets"
                  />
                </Grid>
              </Grid>
            </Box>
          </div>

          {/* home-success-second-sec */}

          <div className="home-success-second-sec">
            <h1 gutterBottom>Top 10 CryptoCurrencies in the world</h1>
            <div className="home-cryptos">
              {/* we will use simplidied as a props,
                  and make as a state, 
                  to show in the home page only 10 
                  cryptos, then when user clicks on
                  Show more button, it shows all
                  cryptos
              */}
              <CryptoCurrencies simplified />
            </div>
            {/* <div className="home-show-more-button">
              <Button>
                <Link to="/cryptocurrencies">Show More</Link>
              </Button>
            </div> */}
          </div>

          {/* home-success-third-sec */}

          <div className="home-success-second-sec">
            <h1>Latest CryptoCurrencies in the world</h1>
            <div className="home-show-more-button">
              <Button>
                <Link
                  style={{ textDecoratin: "none", color: "inherit" }}
                  to="/news"
                >
                  Show More
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
