import { baseApi } from '@/redux/baseApi';

const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (formData) => ({
                url: `/project`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['projects'],
        }),
        getProjects: builder.query({
            query: () => ({
                url: '/project',
                method: 'GET',
            }),
            providesTags: ['projects'],
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/project/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['projects'],
        }),
        updateProject: builder.mutation({
            query: (formData) => ({
                url: `/project/${formData.get('id')}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['projects'],
        }),
    }),
});

export const {
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
    useGetProjectsQuery,
} = projectApi;
