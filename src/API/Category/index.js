import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getAllCategories = async () => {
    const response = await axiosInstance.get(Endpoints.getAllCategories());
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};