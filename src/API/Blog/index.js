import { Endpoints } from "../endpoints";
import axiosInstance, { createPrivateAxios } from "../axiosInstance";

export const getAllBlogs = async (
    categoryId,
    filter,
) => {
    categoryId = categoryId === "" ? undefined : categoryId;
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

export const addBlog = async (
    auth,
    urlFa,
    titleFa,
    shortDescriptionFa,
    descriptionFa,
    titleSeoFa,
    urlEn,
    titleEn,
    shortDescriptionEn,
    descriptionEn,
    titleSeoEn,
    images,
    status,
    category,
) => {
    const privateAxios = createPrivateAxios(auth);
    try {
        const response = await privateAxios.post(
            Endpoints.addBlog,
            {
                fa: {
                    title: titleFa,
                    shortDescription: shortDescriptionFa,
                    description: descriptionFa,
                    titleSeo: titleSeoFa,
                    url: urlFa
                },
                en: {
                    title: titleEn,
                    shortDescription: shortDescriptionEn,
                    description: descriptionEn,
                    titleSeo: titleSeoEn,
                    url: urlEn,
                },
                images: images,
                status: status,
                category: category,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error)
    }
};

export const updateBlog = async (
    auth,
    blogId,
    titleFa,
    titleEn,
    descriptionFa,
    descriptionEn,
    shortDescriptionFa,
    shortDescriptionEn,
    titleSeoFa,
    titleSeoEn,
    urlFa,
    urlEn,
    status,
    images,
    category
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.patch(
        Endpoints.updateBlog(blogId),
        {
            fa: {
                title: titleFa,
                description: descriptionFa,
                shortDescription: shortDescriptionFa,
                url: urlFa,
                titleSeo: titleSeoFa,
            },
            en: {
                title: titleEn,
                shortDescription: shortDescriptionEn,
                description: descriptionEn,
                url: urlEn,
                titleSeo: titleSeoEn
            },
            status: status,
            images: images,
            category: category
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};


