import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';

const axiosSecureUrl = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {userSignOut} = useAuth();
  axiosSecureUrl.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );


  axiosSecureUrl.interceptors.response.use(function (response) {
    return response;
  }, async (error) =>{
   const status = error.response.status

   if (status === 401 || status === 403) {
    await userSignOut();
    navigate('/login')
   }
    return Promise.reject(error);
  });

  return axiosSecureUrl;
};
export default useAxiosSecure;
