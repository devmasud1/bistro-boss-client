import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/quote-left.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

import ReactStarsRating from "react-awesome-stars-rating";
import useAxios from "../../../hooks/useAxios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosUrl = useAxios();

  useEffect(() => {
    axiosUrl.get("/reviews").then((data) => setReviews(data.data));
  }, [axiosUrl]);

  return (
    <div>
      <SectionTitle
        subHeading="What Our Clients Say"
        mainHeading="TESTIMONIALS"
      ></SectionTitle>
      <div className="my-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center space-y-4 my-10 text-center p-5">
                <img src={img} alt="" className="w-20" />

                <ReactStarsRating
                  value={review.rating}
                  readOnly
                  className="flex"
                />
                <h2 className="text-xl md:text-3xl text-orange-600">
                  {review?.name}
                </h2>
                <p>{review?.details}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
