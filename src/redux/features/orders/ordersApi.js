import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL.js";

const ordersApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/orders`,
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/create-order",
        method: "POST",
        body: newOrder,
        credentials: "include",
      }),
    }),
    getOrdersByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = ordersApi;

export default ordersApi;
