import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecureUrl = useAxiosSecure();

  useEffect(() => {
    axiosSecureUrl.get("/menu").then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, [axiosSecureUrl]);
  return [menu, loading];
};
export default UseMenu;
