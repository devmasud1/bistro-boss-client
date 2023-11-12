import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner.jpg";
import introImg from "../../assets/home/chef-service.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";
import Intro from "../Shared/Intro/Intro";

const Menu = () => {
  const [offeredItems, setOfferedItems] = useState([]);
  const [pizzaItems, setPizzaItems] = useState([]);
  const [saladItems, setSaladItems] = useState([]);
  const [soupItems, setSoupItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterOffered = data.filter(
          (item) => item.category === "offered"
        );
        const filterPizza = data.filter((item) => item.category === "pizza");
        const filterSalad = data.filter((item) => item.category === "salad");
        const filterSoup = data.filter((item) => item.category === "soup");
        setOfferedItems(filterOffered);
        setPizzaItems(filterPizza);
        setSaladItems(filterSalad);
        setSoupItems(filterSoup);
      });
  }, []);

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
      <div>
        <div className="grid md:grid-cols-2 gap-8 my-10">
          {offeredItems?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className=" w-3/4 mx-auto text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
        <Intro img={introImg} title="DESSERTS" description={description} />
      </div>

      <div>
        <div className="grid md:grid-cols-2 gap-8 my-10">
          {pizzaItems?.slice(0, 6).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className=" w-3/4 mx-auto text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
        <Intro img={introImg} title="PIZZA" description={description} />
      </div>

      <div>
        <div className="grid md:grid-cols-2 gap-8 my-10">
          {saladItems?.slice(0, 8).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className=" w-3/4 mx-auto text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
        <Intro img={introImg} title="SALADS" description={description} />
      </div>

      <div>
        <div className="grid md:grid-cols-2 gap-8 my-10">
          {soupItems?.slice(0, 10).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className=" w-3/4 mx-auto text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </div>
        <Intro img={introImg} title="SOUPS" description={description} />
      </div>
    </div>
  );
};
export default Menu;
