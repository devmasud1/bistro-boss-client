import { Link } from "react-router-dom";
import Intro from "../../Shared/Intro/Intro";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({
  items,
  introTitle,
  introImg,
  btnTitle,
  description,
}) => {
  return (
    <>
      <Intro img={introImg} title={introTitle} description={description} />
      <div className="grid md:grid-cols-2 gap-8 my-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className=" w-3/4 mx-auto text-center">
        <Link to={`/our-shop/${introTitle}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            {btnTitle}
          </button>
        </Link>
      </div>
    </>
  );
};
export default MenuCategory;
