import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
import config from '@/config';


const baseQuery = fetchBaseQuery({
    baseUrl: config.api_url,
    credentials: 'include',
});
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({}),

    tagTypes: ['blogs', 'projects'],
});
