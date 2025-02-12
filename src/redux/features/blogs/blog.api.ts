import { baseApi } from '@/redux/baseApi';

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (formData) => ({
                url: `/blog`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags:["projects"]
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
        }),
        updateBlog: builder.mutation({
            query: (formData) => ({
              url: `/blog/${formData.get("id")}`,
              method: "PUT",
              body: formData,
            }),
            invalidatesTags: ["blogs"],
          }),
    }),
});

export const { useCreateBlogMutation,useGetBlogsQuery,useDeleteBlogMutation,useUpdateBlogMutation } = blogApi;
