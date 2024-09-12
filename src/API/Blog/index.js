import { Endpoints } from "../endpoints";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";

export const getAllBlogs = async (
    categoryId,
    filter,
) => {
    categoryId = categoryId == "" ? undefined : categoryId;
    const response = await axiosInstance.get(
        Endpoints.getAllBlogs(categoryId, filter)
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const getOneBlog = async (id) => {
    const response = await axiosInstance.get(Endpoints.getOneBlog(id));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const deleteBlog = async (id, auth) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.delete(Endpoints.deleteBlog(id));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const addBlog = async (auth) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.addBlog);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const updateBlog = async (auth) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.patch(
        Endpoints.updateBlog()
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
