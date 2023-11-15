import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosUrl = useAxios();

  useEffect(() => {
    axiosUrl.get("/menu").then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, [axiosUrl]);
  return [menu, loading];
};
export default UseMenu;
