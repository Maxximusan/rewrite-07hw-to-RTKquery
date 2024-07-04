import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const testRTKqueryApi = createApi({
  reducerPath: 'contscts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63a2db089704d18da07e574d.mockapi.io' }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchContactsQuery } = testRTKqueryApi