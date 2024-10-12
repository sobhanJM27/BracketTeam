import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getAllCategories = async () => {
    const response = await axiosInstance.get(Endpoints.getAllCategories);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export const getOneCategory = async (id) => {
    const response = await axiosInstance.get(Endpoints.getOneCategory(id));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

export const addCategory = async (
    auth,
    titleFa,
    titleEn
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.addCategory, {
        fa: {
            title: titleFa
        },
        en: {
            title: titleEn
        }
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
    titleFa,
    titleEn
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.patch(Endpoints.updateCategory(id), {
        fa: {
            title: titleFa
        },
        en: {
            title: titleEn
        }
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
    if (response.status === 204) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
