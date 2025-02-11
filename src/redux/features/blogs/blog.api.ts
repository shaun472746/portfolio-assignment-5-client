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
        getBlogs: builder.query({
            query: () => ({
                url: "/blog",
                method: "GET"
            }),
            providesTags:["blogs"]
        }),
        deleteBlog: builder.mutation({
            query:(id) => ({
                url: `/blog/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:["blogs"]
        })
    }),
});

export const { useCreateBlogMutation,useGetBlogsQuery,useDeleteBlogMutation } = blogApi;
