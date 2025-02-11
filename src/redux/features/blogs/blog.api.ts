import { baseApi } from '@/redux/baseApi';

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (formData) => ({
                url: `/blog`,
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const { useCreateBlogMutation } = blogApi;
