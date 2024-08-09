import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addsapi = createApi({
  reducerPath: 'addsapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    addPerson: builder.mutation({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
    }),
    viewPerson: builder.query({
        query: () => ({
          url: `/users`,
          method: 'GET',
        }),
      }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
    updatePerson: builder.mutation({
        query: (id,datas) => ({
          url: `/users/${id}`,
          method: 'PUT',
          body: datas,
        }),
      }),
  }),
});

export const { useAddPersonMutation, useDeleteUserMutation,useUpdatePersonMutation,useViewPersonQuery} = addsapi;