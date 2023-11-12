import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularItem from "../PopularItem/PopularItem";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./../Banner/Banner";
import Intro from "../../Shared/Intro/Intro";
import img from "../../../assets/home/chef-service.jpg";

const Home = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Intro img={img} title="Bistro Boss" description={description} />
      <PopularItem />
      <Contact />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};
export default Home;
