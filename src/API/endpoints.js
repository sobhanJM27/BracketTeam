export const Endpoints = {
    // User Endpoints
    register: `/auth/register`,
    refreshToken: `/auth/refreshToken`,
    login: `/auth/login`,

    // Blog Endpoints
    addBlog: '/blog/addBlog',
    updatateBlog: '/blog/updatateBlog',
    deleteBlog: (blogId) => `/blog/delete/${blogId}`,
    getAllBlogs: `/blog/getAll`,
    getOneBlog: (blogId) => `blog/${blogId}`,

    // Category Endpoints
    addCategory: `/addCategory`,
    updateCategory: (categoryId) => `/updateCategory/${categoryId}`,
    deleteCategory: (categoryId) => `/deleteCategory/${categoryId}`,
    getOneCategory: (categoryId) => `/getOneCategory/${categoryId}`,
    getAllCategories: (categoryType) => `getAllCategory/${categoryType}`,
}