import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  //const axiosSecureUrl = useAxiosSecure();

  // useEffect(() => {
  //   axiosSecureUrl.get("/menu").then((res) => {
  //     setMenu(res.data);
  //     setLoading(false);
  //   });
  // }, [axiosSecureUrl]);
  // return [menu, loading];

  const axiosPublicUrl = useAxiosPublic();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublicUrl.get("/menu");
      return res.data;
    },
  });
  return [menu, loading, refetch];
};
export default UseMenu;
