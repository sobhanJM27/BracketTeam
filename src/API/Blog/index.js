import { Endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";

export const getAllBlogs = async (
    categoryId,
) => {
    categoryId = categoryId == "" ? undefined : categoryId;
    const response = await axiosInstance.get(
        Endpoints.getAllBlogs(categoryId)
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};