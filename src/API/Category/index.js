import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getAllCategories = async () => {
    const response = await axiosInstance.get(Endpoints.getAllCategories());
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const addCategory = async (
    auth,
    title
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.addCategory, {
        title,
    });
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const editCategory = async (
    auth,
    id,
    title
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.patch(Endpoints.editCategory(id), {
        title
    });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const deleteCategory = async (
    auth,
    id
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.delete(Endpoints.deleteCategory(id));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
