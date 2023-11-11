
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Intro from '../Intro/Intro';
import PopularItem from '../PopularItem/PopularItem';
import Recommends from '../Recommends/Recommends';
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
        </div>
    )}
export default Home;