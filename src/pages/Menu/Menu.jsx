import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner.jpg";
import introImg from "../../assets/home/chef-service.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UseMenu from "../../hooks/UseMenu";
import MenuCategory from "./Shared/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const filterOffered = menu.filter((item) => item.category === "offered");
  const filterPizza = menu.filter((item) => item.category === "pizza");
  const filterSalad = menu.filter((item) => item.category === "salad");
  const filterSoup = menu.filter((item) => item.category === "soup");

  const description = (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
      libero accusamus laborum deserunt ratione dolor officiis praesentium!
      Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
      quibusdam nemo.
    </>
  );
  return (
    <div>
      <Cover
        img={coverImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      />
      <SectionTitle
        subHeading="Don't miss"
        mainHeading="TODAY'S OFFER"
      ></SectionTitle>

      {/* offered-food */}
      <MenuCategory
        items={filterOffered}
        introImg={introImg}
        introTitle="DESSERTS"
        description={description}
        btnTitle="ORDER YOUR FAVORITE FOOD"
      />

      {/* pizza */}
      <MenuCategory
        items={filterPizza}
        introImg={introImg}
        introTitle="Pizza"
        description={description}
        btnTitle="ORDER YOUR FAVORITE FOOD"
      />

      {/* Salad */}
      <MenuCategory
        items={filterSalad}
        introImg={introImg}
        introTitle="Salad"
        description={description}
        btnTitle="ORDER YOUR FAVORITE FOOD"
      />

      {/* Soup */}
      <MenuCategory
        items={filterSoup}
        introImg={introImg}
        introTitle="SOUPS"
        description={description}
        btnTitle="ORDER YOUR FAVORITE FOOD"
      />
    </div>
  );
};
export default Menu;
