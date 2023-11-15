import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxios = () => {
  return axiosUrl;
};
export default useAxios;
