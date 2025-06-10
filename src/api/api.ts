// src/api/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PaintingResponse {
  data: Painting[];
  totalCount: number;
}

export const artApi = createApi({
  reducerPath: 'artApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team' }),
  endpoints: builder => ({
    getPaintings: builder.query<PaintingResponse, { 
      q?: string; 
      _page?: number; 
      _limit?: number 
    }>({
      query: (params) => ({
        url: '/paintings',
        params: {
          ...(params.q && { q: params.q }),
          ...(params._page && { _page: params._page }),
          ...(params._limit && { _limit: params._limit }),
        },
      }),
      transformResponse: (response: Painting[], meta) => {
        // Получаем общее количество из заголовков
        const totalCount = parseInt(
          meta?.response?.headers.get('X-Total-Count') || '0',
          10
        );
        return { data: response, totalCount };
      },
    }),
    getAuthors: builder.query<{ id: number; name: string }[], void>({
      query: () => '/authors',
    }),
    getLocations: builder.query<{ id: number; location: string }[], void>({
      query: () => '/locations',
    }),
  }),
});

export const {
  useGetPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} = artApi;