import { createPrivateAxios } from '../axiosInstance';
import { Endpoints } from '../endpoints';

export const addImage = async (auth, images) => {
  const privateAxios = createPrivateAxios(auth);
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append('images', images[i]);
  }
  const response = await privateAxios.post(Endpoints.addImage, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  if (response.status === 201) {
    return response.data.urlImage;
  } else {
    throw new Error(response.statusText);
  }
};
