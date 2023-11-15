import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosUrl = useAxios();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosUrl.get(`carts?email=${user.email}`);
      return res.data;
    },
  });
  return [refetch, cart ];
};
export default useCart;
