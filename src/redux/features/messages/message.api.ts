import { baseApi } from '@/redux/baseApi';

const messageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createMessage: builder.mutation({
            query: (formData) => ({
                url: `/message`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['messages'],
        }),
        getMessages: builder.query({
            query: () => ({
                url: '/message',
                method: 'GET',
            }),
            providesTags: ['messages'],
        }),
    }),
});

export const { useCreateMessageMutation, useGetMessagesQuery } = messageApi;
