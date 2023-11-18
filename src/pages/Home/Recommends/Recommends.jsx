import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCard from "../../../components/FoodCard/FoodCard";
import useAxios from "../../../hooks/useAxios";

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);
  const axiosUrl = useAxios();

  useEffect(() => {
    axiosUrl
      .get("/menu")
      .then((res) =>
        setRecommends(res.data.filter((item) => item.category === "salad"))
      );
  }, [axiosUrl]);

  return (
    <div className="my-20">
      <SectionTitle
        subHeading="Should Try"
        mainHeading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-8 mx-5 lg:mx-0">
        {recommends.slice(0, 6).map((cartItem) => (
          <FoodCard cartItem={cartItem} key={cartItem._id} />
        ))}
      </div>
    </div>
  );
};
export default Recommends;
