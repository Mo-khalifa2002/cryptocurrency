import React, { useState } from "react";
import axios from "axios";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";

const News = () => {
  const [newsData, setNewsData] = useState([])

  const options = {
    method: "GET",
    url: "https://crypto-news15.p.rapidapi.com/news/amb",
    headers: {
      "X-RapidAPI-Key": "59b33c66e6msh30a9a6566d44defp1fb253jsn315a88e52038",
      "X-RapidAPI-Host": "crypto-news15.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setNewsData(data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      {data.map(neww => (
        <h1>{neww.title}</h1>
      ))}
    </div>
  );
};

export default News;
