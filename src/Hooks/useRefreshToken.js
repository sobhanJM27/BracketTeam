import { getRefreshToken } from '../API/Auth';
import { getCookie } from '../Utils/cookie.js';

const useRefreshToken = () => {
  const refresh = async () => {
    const token = getCookie('win_token');
    const response = await getRefreshToken(token);
    return response.token;
  };
  return refresh;
};

export default useRefreshToken;
