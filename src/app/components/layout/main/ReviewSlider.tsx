'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ReviewCard } from '../../ui/ReviewCard';

type Review = {
    name: string;
    rating: number;
    text: string;
    imgSrc: string;
}

type ReviewSliderProps = {
    reviews: Review[];
}


export const ReviewSlider = ({reviews}: ReviewSliderProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
            320: {slidesPerView: 1},
            1024: {slidesPerView: 2}
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
              <ReviewCard imageSrc={review.imgSrc} author={review.name} rating={review.rating} reviewText={review.text}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
