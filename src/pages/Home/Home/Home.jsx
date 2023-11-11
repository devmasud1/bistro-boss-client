
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import PopularItem from '../PopularItem/PopularItem';
import Banner from './../Banner/Banner';


const Home = () => {
    return(
        <div>
             <Banner/>
             <Category/>
             <Featured/>
             <PopularItem/>
        </div>
    )}
export default Home;