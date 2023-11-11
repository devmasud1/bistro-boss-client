import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularItem = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="Check it out"
        mainHeading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 my-10">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    <div className=" w-3/4 mx-auto text-center">
    <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </div>
    </div>
  );
};
export default PopularItem;
