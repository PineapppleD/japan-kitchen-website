"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      title: "Tom Yum",
      desc: "Aromatic, rich, spicy chicken broth with shrimp, oyster mushrooms, leeks, squid,  cherry tomatoes. Served with Chinese steamed rice, lime and chilli.",
      img: "/tom-yum.png",
    },
    {
      title: "Ramen with Chicken",
      desc: "Soy broth, wheat noodles, chicken fillet, miso motodare, shiitake, spicy corn, ajitama egg, green onion, sesame",
      img: "/ramen.png",
    },
    {
      title: "Unagi Crunch",
      desc: "Roll with eel, tempura shrimp, cucumber, cream cheese, decorated with fish pabiran, tobiko caviar, spicy and teriyaki sauces.",
      img: "/unagi.png",
    },
    {
      title: "Ramen with Chicken",
      desc: "Soy broth, wheat noodles, chicken fillet, miso motodare, shiitake, spicy corn, ajitama egg, green onion, sesame",
      img: "/ramen.png",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={20}
      className="my-10 flex items-center justify-center w-[90%] gap-10"
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="my-10 w-[300px] mx-auto">
          <div
            className="rounded-tl-[10%] rounded-br-[10%] bg-secondary-bg
                    px-[16px] py-[12px] w-full text-center
                    md:rounded-tl-[10%] md:rounded-br-[10%] md:px-[15px] md:py-[12px]
                    lg:rounded-tl-[15%] lg:rounded-br-[15%] lg:px-[20px] lg:py-[18px]
                    xl:rounded-tl-[20%] xl:rounded-br-[20%] xl:px-[26px] xl:py-[16px]
                    2xl:rounded-tl-[25%] 2xl:rounded-br-[25%] 2xl:px-[34px] 2xl:py-[20px]"
          >
            <Image
              src={slide.img}
              alt={slide.title}
              className="w-full h-48 object-contain mx-auto"
              width={300}
              height={300}
            />
            <h3 className="text-main-text font-bold text-[16px] md:text-[18px] lg:text-[24px] 2xl:text-[28px] font-alegreya py-5">
              {slide.title}
            </h3>
            <p className="text-main-text md:text-[12px] lg:text-[14px] 2xl:text-[18px] font-alegreya">
              {slide.desc}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
