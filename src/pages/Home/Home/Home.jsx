import { Helmet } from 'react-helmet-async';
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Intro from "../Intro/Intro";
import PopularItem from "../PopularItem/PopularItem";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Intro />
      <PopularItem />
      <Contact />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};
export default Home;
