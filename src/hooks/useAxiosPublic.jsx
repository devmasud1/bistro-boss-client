import axios from "axios";

const axiosPublicUrl = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosPublic = () => {
  return axiosPublicUrl;
};
export default useAxiosPublic;
