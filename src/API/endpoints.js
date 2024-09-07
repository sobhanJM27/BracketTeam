export const Endpoints = {
    // User Endpoints
    register: `/auth/register`,
    refreshToken: `/auth/refreshToken`,
    login: `/auth/login`,

    // Blog Endpoints
    addBlog: '/blog/addBlog',
    updatateBlog: '/blog/updatateBlog',
    deleteBlog: (blogId) => `/blog/delete/${blogId}`,
    getAllBlogs: (categoryType, filter) => `/blog/all/${categoryType}/${filter}`,
    getOneBlog: (blogId) => `blog/one/${blogId}`,

    // Category Endpoints
    addCategory: `/addCategory`,
    updateCategory: (categoryId) => `/updateCategory/${categoryId}`,
    deleteCategory: (categoryId) => `/deleteCategory/${categoryId}`,
    getOneCategory: (categoryId) => `/getOneCategory/${categoryId}`,
    getAllCategories: `/getAllCategory`,
}