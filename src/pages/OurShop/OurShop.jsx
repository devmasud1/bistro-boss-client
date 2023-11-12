import Cover from "../Shared/Cover/Cover";
import shopCover from "../../assets/shop/banner.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import UseMenu from "../../hooks/UseMenu";
import FoodCard from "./../../components/SectionTitle/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const [menu] = UseMenu();

  const tabItem = ["salad", "pizza", "soups", "dessert", "drinks"];

  const { category } = useParams();
  const initialIndex = tabItem.indexOf(category.toLowerCase());
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // const categoryName = category.toLowerCase();
  // console.log(categoryName)

  const filteredItems = {
    salad: menu.filter((item) => item.category === "salad"),
    pizza: menu.filter((item) => item.category === "pizza"),
    soups: menu.filter((item) => item.category === "soup"),
    dessert: menu.filter((item) => item.category === "dessert"),
    drinks: menu.filter((item) => item.category === "drinks"),
  };

  return (
    <div>
      <Cover
        img={shopCover}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />

      <div className="my-20 text-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {tabItem.map((item, idx) => (
              <Tab key={idx}>{item}</Tab>
            ))}
          </TabList>

          <div>
            {tabItem.map((item, idx) => (
              <TabPanel key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                  {filteredItems[item].map((menuItems) => (
                    <FoodCard cartItem={menuItems} key={menuItems._id} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};
export default OurShop;
