import axiosInstance, { createPrivateAxios } from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getDesc = async () => {
    const response = await axiosInstance.get(Endpoints.getDesc);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

export const addDesc = async (
    auth,
    titleFa,
    descriptionFa,
    titleSeoFa,
    titleEn,
    descriptionEn,
    titleSeoEn,
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.addDesc, {
        fa: {
            title: titleFa,
            titleSeo: titleSeoFa,
            description: descriptionFa
        },
        en: {
            title: titleEn,
            titleSeo: titleSeoEn,
            description: descriptionEn
        }
    });
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

export const getAllServices = async () => {
    const response = await axiosInstance.get(Endpoints.getAllServices);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

export const addServices = async (
    auth,
    titleFa,
    featureFa,
    priceFa,
    titleEn,
    featureEn,
    priceEn,
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.addServices, {
        fa: {
            title: titleFa,
            feature: featureFa,
            price: priceFa,
        },
        en: {
            title: titleEn,
            feature: featureEn,
            price: priceEn,
        }
    });
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

export const addProject = async (
    auth,
    serviceID,
) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.post(Endpoints.addProject(serviceID));
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

export const getAllProject = async () => {
    const response = await axiosInstance.get(Endpoints.getAllProject);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
}

const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
        case 'pendding':
            return 'pendding';
        case 'accept':
            return 'accept';
        case 'reject':
            return 'reject';
        default:
            return 'pendding';
    }
};

export const status = async (
    auth,
    projectId,
    currentStatus
) => {
    const newStatus = getNextStatus(currentStatus);
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.patch(Endpoints.status,
        {
            id: projectId,
            status: newStatus
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
}

export const deleteService = async (id, auth) => {
    const privateAxios = createPrivateAxios(auth);
    const response = await privateAxios.delete(Endpoints.deleteService(id));
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
