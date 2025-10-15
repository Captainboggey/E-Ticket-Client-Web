import React from "react";

import c1 from "../../../assets/car2/1.webp";
import Swiper from "react-id-swiper";

const Caresoul2 = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <Swiper {...params}>
      <div
        style={{
          backgroundImage: `url(${c1})`,
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/2)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/3)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/4)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/5)",
        }}
      />
    </Swiper>
  );
};
export default Caresoul2;
