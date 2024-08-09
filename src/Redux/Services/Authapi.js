
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/allapis';





export const authapi = createApi({
  reducerPath: 'authapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://52.237.159.182:8080/' }),
  endpoints: (builder) => ({
    adminlogin: builder.mutation({
      query: ({
        username,
        password}) => ({
        url: 'authenticate',
        method: 'POST',
        body: {
            username:username,
        password:password
        },
        headers: {
          "Content-Type": "application/json",

        },
         responseHandler: (response) => response
      }),
    }),
   
  }),
});

export const { useAdminloginMutation} = authapi;