export const Endpoints = {
  // User Endpoints
  register: `/auth/register`,
  refreshToken: `/auth/refreshToken`,
  login: `/auth/login`,

  // Blog Endpoints
  addBlog: '/blog/addBlog',
  updateBlog: (blogId) => `/blog/update/${blogId}`,
  deleteBlog: (blogId) => `/blog/delete/${blogId}`,
  getAllBlogs: (categoryType, filter) => `/blog/all/${categoryType}/${filter}`,
  getOneBlog: (blogId) => `blog/one/${blogId}`,

  // Category Endpoints
  addCategory: `/addCategory`,
  updateCategory: (categoryId) => `/updateCategory/${categoryId}`,
  deleteCategory: (categoryId) => `/deleteCategory/${categoryId}`,
  getOneCategory: (categoryId) => `/getOneCategory/${categoryId}`,
  getAllCategories: `/getAllCategory`,

  // Image Endpoints
  addImage: '/addImage',

  // Services Endpoints
  getDesc: '/getDesc',
  addDesc: '/addDesc',
  getAllServices: '/getAllService',
  addServices: '/addService',
  addProject: (serviceID) => `/addProject/${serviceID}`,
  status: '/status',
  getAllProject: '/getAllProject',
  deleteService: (serviceID) => `/deleteService/${serviceID}`,
};
