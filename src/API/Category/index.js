import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getAllCategories = async (
    type = 'blog'
) => {
    const response = await axiosInstance.get(Endpoints.getAllCategories(type));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};