import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "ba9752f8ccmshb681c833b6e0be6p11f1cajsnc5db81d87878",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      // query: (count) => createRequest(`/coins?limit=${count}`),
      query: () => createRequest(`/coins`),
    }),

    getCryptoDetails: builder.query({
      query: ({ coinId }) => createRequest(`coin/${coinId}`),
    }),

     getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery  } = cryptoApi;
