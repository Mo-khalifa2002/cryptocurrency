import React, { useEffect, useState } from "react";
import { millify } from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar, TextField } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  {
    /* we will use simplidied as a props,
                  and make as a state, 
                  to show in the home page only 10 
                  cryptos, then when user clicks on
                  Show more button, it shows all
                  cryptos
              */
  }

  const {
    data: cryptosList,
    isLoading,
    error,
    isError,
    isSuccess,

    // we will pass the count to the cryptoApi slice,
    // to control the amount of cryptos that appears
    // form the api

    // useGetCryptosQuery(count)
  } = useGetCryptosQuery();

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const globalCoins = data?.data?.coins;
  // console.log(cryptos);

  // setting the logic for the search term filtering
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  return (
    <>
      {isLoading && <div className="loading">loading...</div>}
      {isError && error.message}
      {isSuccess && (
        <div className="cryptos">
          <div className="crypto-input-search">
            <TextField
              onChange={(e) => setSearchTerm(e.target.value)}
              label="Search CryptoCurrencie"
              color="secondary"
              focused
            />
          </div>

          <Grid container spacing={4}>
            {cryptos.map((currency) => (
              <Grid item md={3}>
                <Link
                  style={{ textDocoration: "none" }}
                  to={`/cryptos/${cryptos.uuid}`}
                >
                  <Card key={currency.uuid} sx={{ minWidth: 275 }}>
                    <CardContent>
                      <div className="currency-first-row" row>
                        {/* <b> */}
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                          className="currency-name-header"
                        >
                          {currency.rank}. {currency.name}
                        </Typography>
                        {/* </b> */}

                        <div className="currrency-image">
                          <Avatar alt={currency.name} src={currency.iconUrl} />
                        </div>
                      </div>

                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Price: {millify(currency.price)}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Market Cap: {millify(currency.marketCap)}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Daily Change: {currency.change}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default CryptoCurrencies;
