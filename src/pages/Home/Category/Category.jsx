import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../../assets/home/category/slide1.jpg";
import img2 from "../../../assets/home/category/slide2.jpg";
import img3 from "../../../assets/home/category/slide3.jpg";
import img4 from "../../../assets/home/category/slide4.jpg";
import img5 from "../../../assets/home/category/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-20 w-full">
        <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        mainHeading="ORDER ONLINE"
        >

        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
            <div className="">
            <img src={img1} alt="" />

            </div>
            <h2 className="bg-black absolute z-10 p-2 text-xl lg:text-3xl -mt-16 text-slate-200 font-medium text-center uppercase">salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2 className="bg-black absolute z-10 p-2 text-xl lg:text-3xl -mt-16 text-slate-200 font-medium text-center uppercase">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2 className="bg-black absolute z-10 p-2 text-xl lg:text-3xl -mt-16 text-slate-200 font-medium text-center uppercase">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h2 className="bg-black absolute z-10 p-2 text-xl lg:text-3xl -mt-16 text-slate-200 font-medium text-center uppercase">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h2 className="bg-black absolute z-10 p-2 text-xl lg:text-3xl -mt-16 text-slate-200 font-medium text-center uppercase">salad</h2>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
export default Category;
