
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Intro from '../Intro/Intro';
import PopularItem from '../PopularItem/PopularItem';
import Recommends from '../Recommends/Recommends';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './../Banner/Banner';


const Home = () => {
    return(
        <div>
             <Banner/>
             <Category/>
             <Intro/>
             <PopularItem/>
             <Contact/>
             <Recommends/>
             <Featured/>
             <Testimonials/>
        </div>
    )}
export default Home;