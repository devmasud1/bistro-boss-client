import Cover from "../Shared/Cover/Cover";
import shopCover from "../../assets/shop/banner.jpg";

const OurShop = () => {
  return (
    <div>
      <Cover
        img={shopCover}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />
    </div>
  );
};
export default OurShop;
