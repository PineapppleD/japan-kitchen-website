import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Heading } from "../../ui/Heading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ReviewCard } from "../../ui/ReviewCard";
import { ReviewSlider } from "./ReviewSlider";

const reviews = [
  {
    name: "Liam",
    rating: 5,
    text: "Beautiful place! Top-notch service, cozy atmosphere and excellent quality of food. Highly recommend to all lovers of Japanese cuisine!",
    imgSrc: "/review1.png",
  },
  {
    name: "William",
    rating: 3.5,
    text: "Amazing restaurant! Friendly staff, fresh ingredients and perfectly prepared dishes. Very tasty and authentic!",
    imgSrc: "/review2.png",
  },
  {
    name: "Sophia",
    rating: 4,
    text: "Great food and ambiance. Loved the presentation and the taste. Would definitely come back with friends!",
    imgSrc: "/review3.png",
  },
];

export const ReviewsSection = () => {
  return (
    <div className="w-full xl:px-[105px] px-[20px]">
      <Heading className="text-main-text text-8xl font-bonzai mb-10">
        Reviews
      </Heading>
      <div className="flex items-center justify-center">
        <ReviewSlider reviews={reviews}/>
      </div>
    </div>
  );
};
